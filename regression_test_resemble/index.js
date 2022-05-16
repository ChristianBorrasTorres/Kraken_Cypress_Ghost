const playwright = require('playwright');
const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');

const { viewportHeight, viewportWidth, features, options } = config;

async function executeTest(){
    let resultInfo = {}
    let datetime = new Date().toISOString().replace(/:/g,".");

    for (currentFeature of features){

        if (!fs.existsSync(`./${currentFeature}/compare/`)){
            fs.mkdirSync(`./${currentFeature}/compare/`, { recursive: true });
        }

        if (!fs.existsSync(`./${currentFeature}/results/`)){
            fs.mkdirSync(`./${currentFeature}/results/`, { recursive: true });
        }

        dirBeforeName = concatName(currentFeature, 'before');
        dirAfterName = concatName(currentFeature, 'after');

        images = fs.readdirSync(dirBeforeName);

        for (imageName of images){
            const data = await compareImages(
                fs.readFileSync(`./${dirBeforeName}/${imageName}`),
                fs.readFileSync(`./${dirAfterName}/${imageName}`),
                options
                );
                
                resultInfo[imageName] = {
                    isSameDimensions: data.isSameDimensions,
                    dimensionDifference: data.dimensionDifference,
                    rawMisMatchPercentage: data.rawMisMatchPercentage,
                    misMatchPercentage: data.misMatchPercentage,
                    diffBounds: data.diffBounds,
                    analysisTime: data.analysisTime
                }

                fs.writeFileSync(`./${currentFeature}/compare/${imageName}`, data.getBuffer());
        }
        fs.writeFileSync(`./${currentFeature}/results/report.html`, createReport(datetime, resultInfo, currentFeature,images));
        fs.copyFileSync('./index.css',   `./${currentFeature}/results/index.css`);
    }



    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")
    return resultInfo;  
  }
(async ()=>console.log(await executeTest()))();

function concatName(featureName, sufix){
    return `./${featureName}/${sufix}`;
}

function feature(f, info, images){
    html = ``
    for(currentImage of images){
        html = html + `
        <div class="browser" id="test0">
            <div class="btitle">
                <h2>Feature: ${f}</h2>
                <p>Data: ${JSON.stringify(info[currentImage])}</p>
            </div>
            <div class="imgline">
                <div class="imgcontainer">
                    <span class="imgname">Reference</span>
                    <img class="img2" src="./../../${f}/before/${currentImage}" id="refImage" label="Reference">
                </div>
                
                <div class="imgcontainer">
                    <span class="imgname">Test</span>
                    <img class="img2" src="./../../${f}/after/${currentImage}" id="testImage" label="Test">
                </div>
            </div>
            <div class="imgline">
                <div class="imgcontainer">
                    <span class="imgname">Diff</span>
                    <img class="imgfull" src="./../../${f}/compare/${currentImage}" id="diffImage" label="Diff">
                </div>
            </div>
        </div>
        <br/>
        <br/>
        <hr>`
    }
    return html;
}

function createReport(datetime, resultInfo, currentFeature, images){
    return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <div>
                <h1>Report for Ghost</h1>
                <p>Executed: ${datetime}</p>
                <div id="visualizer">
                    ${feature(currentFeature, resultInfo, images)}
                </div>
            </div>
        </body>
    </html>`
}
