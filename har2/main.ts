
import * as fs from 'fs'
import * as yaml from 'js-yaml'
import * as path from 'path'
import commander from 'commander'

commander
    .arguments('<inPath> <outPath>')
    .action(exec)
    .parse(process.argv)

function exec(inPath: string, outPath: string) {
    /**
     *  fetch file as object  
     */
    const originalHarFile = fs.readFileSync(inPath).toString()
    const originalHarObj = JSON.parse(originalHarFile)
    // TODO: this path sholud be able to change.
    const commentYaml = path.resolve(__dirname, '../model/comment.yaml')
    const bodyYaml = path.resolve(__dirname, '../model/body.yaml')
    
    /** 
     * output stream 
     */
    let outStream = ''
    
    /**
     *  add comment 
     */
    const notedAsComments = yaml.safeLoad(fs.readFileSync(commentYaml).toString())
    const notedAsCommentsKeys = Object.keys(notedAsComments as object)
    notedAsCommentsKeys.map(key => {
        const prop = (notedAsComments as any)[key]
        const results = indexHandler({
            target: originalHarObj.log.pages[0] as object,
            prop: prop
        })
        outStream += `${key}:${results}   `
    })
    outStream = outStream.trim() + '\n'

    /**
     *  add body 
     */
    const notedAsBody = yaml.safeLoad(fs.readFileSync(bodyYaml).toString())
    const notedAsBodyKeys = Object.keys(notedAsBody as object)
    outStream += notedAsBodyKeys.join(',').slice(0, -1)+ '\n'
    originalHarObj.log.entries.map((entry: any) => {
        notedAsBodyKeys.map((key: any) => {
            const prop = (notedAsBody as any)[key]
            const results = indexHandler({
                target: entry as object,
                prop: prop
            })
            outStream += results + ','
        })
        outStream = outStream + '\n'
    })

    fs.writeFileSync(outPath, outStream)
}

function indexHandler({target, prop}: any): any {
    
    const indice: Array<string> = prop.split('.')
    
    if (indice.length === 1) {
        return target[indice[0]]
    } else if (indice.length === 2) {
        return target[indice[0]][indice[1]]
    } else if (indice.length === 3) {
        return target[indice[0]][indice[1]][indice[2]]
    }

    return undefined
}

