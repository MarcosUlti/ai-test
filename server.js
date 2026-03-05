const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("public"))

const API_KEY = process.env.API_KEY
const ACCOUNT_ID = process.env.ACCOUNT_ID

app.post("/chat", async (req,res)=>{

    try{

        const msg = req.body.message

        const response = await fetch(
            `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/ai/run/@cf/meta/llama-3-8b-instruct`,
            {
                method:"POST",
                headers:{
                    "Authorization":`Bearer ${API_KEY}`,
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    messages:[
                        { role:"user", content:msg }
                    ]
                })
            }
        )

        const data = await response.json()

        res.json({
            reply: data.result.response
        })

    }catch(err){

        console.log(err)

        res.json({
            reply:"Erro ao chamar IA"
        })

    }

})

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log("Server rodando")
})
