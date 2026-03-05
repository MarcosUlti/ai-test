const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("public"))

const API_KEY = "apf_itbwvlrrz9o42dyqdwqlz064"

app.post("/chat", async (req, res) => {

    const msg = req.body.message

    const response = await fetch("https://api.apifreellm.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
                { role: "user", content: msg }
            ]
        })
    })

    const data = await response.json()

    res.json({
        reply: data.choices[0].message.content
    })
})

app.listen(3000, () => {
    console.log("Server rodando em http://localhost:3000")
})