const fs = require('fs')
const path = require('path')


const dirPath = path.join(__dirname, "../src/posts")

let postList = []

const getPost = async ()=>{
    await fs.readdir(dirPath, (err,files) =>{
        if(err){
            return console.log('Failde in: ' + err)

        }
        console.log(files)
        files.forEach((file,idx) =>{
            let obj = {};
            let post;
            console.log(obj,post)
            fs.readFile(`${dirPath}/${file}`, "utf-8", (err, content) =>{
                const getMetadataIndices = (acc, elem, i ) =>{
                    if(/^---/.test(elem)){
                        acc.push(i)
                    }
                    return acc;
                }
                const parseMetadata = ({lines, metadataIndices}) =>{
                    if(metadataIndices.length > 0){
                        lines = lines.slice(metadataIndices[0] +1, metadataIndices[1])
                        
                    }
                }
                const lines = content.split("/n")
                const metadataIndices = lines.reduce(getMetadataIndices, [])
                const metadata = parseMetadata({lines, metadataIndices})
                console.log(metadata)
            })
        })
    })
}



getPost();
