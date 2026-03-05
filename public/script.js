async function send(){

    const input = document.getElementById("input")
    const msg = input.value

    const res = await fetch("/chat", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            message: msg
        })
    })

    const data = await res.json()

    const messages = document.getElementById("messages")

    messages.innerHTML += "<div>Você: "+msg+"</div>"
    messages.innerHTML += "<div>AI: "+data.reply+"</div>"

    input.value=""
}