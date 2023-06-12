const path = require("path")
const fs = require("fs")

const dirPath = path.join(__dirname, "../src/posts")

const dirPathPages = path.join(__dirname, "../src/pages/content")

let postlist = []
let pagelist = []

const getPosts = async () => {

    await fs.readdir(dirPath, (err, files)  => {
        if(err){
            return console.log('Fail to charge' + err)
        }

        files.forEach((file,i)=>{
            let obj ={}
            let post;
            fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents)=>{

                //Empezamos con descomponer mediante un re los metadatas
                const getMetadataIndices = (acc, elem, i) => {
                    if (/^---/.test(elem)) {
                        acc.push(i)
                    }
                    return acc
                }                

                // Toma el valor de la metadata y devuelve la metadata mediante un objeto.
                const parseMetadata = ({lines, metadataIndices}) => {
                    if (metadataIndices.length > 0) {
                        let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1])
                        metadata.forEach(line => {
                            obj[line.split(": ")[0]] = line.split(": ")[1]
                        })
                        return obj
                    }
                }       

                const parseContent = ({lines, metadataIndices}) => {
                    if (metadataIndices.length > 0) {
                        lines = lines.slice(metadataIndices[1] + 1, lines.length)
                    }
                    return lines.join("\n")
                }                    
                const lines = contents.split("\n")
                const metadataIndices = lines.reduce(getMetadataIndices, [])
                const metadata = parseMetadata({lines, metadataIndices})
                const content = parseContent({lines, metadataIndices})
                
                post = {
                    id: i + 1,
                    title: metadata.title ? metadata.title : "Titulo no encontrado.",
                    author: metadata.author ? metadata.author : "Sin autor.",
                    date: metadata.date ? metadata.date : "--/--/--",
                    content: content ? content : "No se ha encontrado contenido en este post."

                }
                postlist.push(post)
                if (i === files.length - 1) {
                    const sortedList = postlist.sort ((a, b) => {
                        return a.id < b.id ? 1 : -1
                    })
                    let data = JSON.stringify(sortedList)
                    fs.writeFileSync("src/posts.json", data)
                }
                
            })
        })
    })
    return 
}
// const getPages = () => {
//     fs.readdir(dirPathPages, (err, files) => {
//         if (err) {
//             return console.log("Failed to list contents of directory: " + err)
//         }
//         files.forEach((file, i) => {
//             let page
//             fs.readFile(`${dirPathPages}/${file}`, "utf8", (err, contents) => { 
//                 page = {
//                     content: contents
//                 }
//                 pagelist.push(page)
//                 let data = JSON.stringify(pagelist)
//                 fs.writeFileSync("src/pages.json", data)
//             })
//         })
//     })
//     return }

getPosts()
