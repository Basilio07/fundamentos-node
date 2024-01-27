export async function JSON(req, res) {
    const buffers = []

    for await (const chunk of req) {
     buffers.push(chunk)
    }
 
    try{
    req.body = JASON.parse(Buffer.concat(buffers).toString())
    } catch {
     req.body = null
   }

   res.setHeader('Content-type', 'application/json')
}