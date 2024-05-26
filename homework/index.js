let url = "https://official-joke-api.appspot.com/jokes/ten"

function init() {
    try {
        let url = "https://official-joke-api.appspot.com/jokes/ten"
        const getJokesbtn = document.querySelector("#getJokesbtn")
        const jokesType = document.querySelector("#jokesType")


        getJokesbtn.addEventListener("click", async () => {
            if (jokesType.value !== "general") {
                url = "https://official-joke-api.appspot.com/jokes/" + jokesType.value + "/ten"
                
            }
            loadJokes(url)

        })
    } catch (error) {
        console.log(error);
    }


}

async function loadJokes(url) {
    const Jokes = await getApiData(url)
    draw(Jokes)


}

async function getApiData(url) {
    const result = await fetch(url, { method: "GET" })
    const data = await result.json()

    return data
}

function draw(Jokes) {
    if (!Array.isArray(Jokes)) return
    clearData();
    const JokesDiv = document.querySelector("#JokesDiv")
    const Jokescards = Jokes.map(Joke => gatSingleJoke(Joke))
    JokesDiv.append(...Jokescards)
}

function clearData() {
    document.querySelector("#JokesDiv").innerHTML = "";
}

function gatSingleJoke(Joke) {
    const JokeDiv = document.createElement("div")
    JokeDiv.id = "JokeDiv"
    const content = document.createElement("h5")
    const showPunchlinebtn = document.createElement("button")
    showPunchlinebtn.id = "showPunchlinebtn"
    const closePunchlinebtn = document.createElement("button")
    closePunchlinebtn.id = "showPunchlinebtn"
    closePunchlinebtn.classList.add("btn", "btn-outline-danger")
    closePunchlinebtn.style.display = 'none'
    const type = document.createElement("span")

    closePunchlinebtn.innerText = "close Punchline"
    content.innerText = Joke.setup
    showPunchlinebtn.innerText = "show Punchline"
    showPunchlinebtn.classList.add("btn", "btn-outline-info")
    type.innerText ="Type: "+ Joke.type

    showPunchlinebtn.addEventListener("click", () => {
        content.innerText = Joke.punchline
        showPunchlinebtn.style.display = 'none'
        closePunchlinebtn.style.display = 'block'
        JokeDiv.style.backgroundColor = "#0dcaf0"
    })

    closePunchlinebtn.addEventListener("click", () => {
        content.innerText = Joke.setup
        closePunchlinebtn.style.display = 'none'
        showPunchlinebtn.style.display = 'block'
        JokeDiv.style.backgroundColor = "white"
    })

    JokeDiv.append(type, content, showPunchlinebtn, closePunchlinebtn,)
    return JokeDiv

}


init();
