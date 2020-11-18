const num: number = +process.argv[2];
console.log(sum(num));

function sum(num: number): number {
    return num + 10
}
