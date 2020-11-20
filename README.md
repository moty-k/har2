# HAR2

![npm release](https://github.com/moochan-k/har2/workflows/npm%20release/badge.svg)

Convert HAR(HTTP Archive) file into CSV format

## Usage

### Install

Add globally

```sh
# install with npm 
npm i -g @moochan/har2 
```


### Run

Convert har formated file into csv formated file.<br>


```sh
# You have to convert file one by one...
har2 path/to/input.har path/to/output.csv
```

## Default output items

### comment
- title
- onContentLoad
- onLoad

### body

|csv column name|description|
| -- | -- |
|resource_type|_resourceType|
|response_size|response.bodySize|
|time_total|time|
|blocked|timings.blocked|
|dns|timings.dns|
|ssl|timings.ssl|
|connect|timings.connect|
|send|timings.send|
|wait|timings.wait|
|receive|timings.receive|


## Customize items to be output

wip


## Customize output format

wip

## Tips

### How to export har file

You can export har file with

- Internet Explorer / Edge
- Firefox
- Chrome

The details are as follows.

>  Google Admin Toolbox<br>
https://toolbox.googleapps.com/apps/har_analyzer/

## License
MIT


## Contribors
- [MotoyaKondo](https://github.com/moochan-k)

