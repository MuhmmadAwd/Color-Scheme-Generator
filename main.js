const formScheme = document.getElementById("form-scheme")

formScheme.addEventListener("submit", fetchColorScheme)

function fetchColorScheme(e) {
    e.preventDefault()
    const colorSeed = formScheme.querySelector(".color-input").value.slice(1)
    const mode = formScheme.querySelector("#scheme-select").value
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorSeed}&mode=${mode}&count=5`)
        .then((res) => res.json())
        .then((data) => {
            renderColorScheme(data.colors)
        })
}

function renderColorScheme(colors) {
    let schemeColorList = ''
    colors.map((color) => {
        schemeColorList += `
        <article style="background-color: ${color.hex.value};" class="scheme-color">
        <span class="scheme-hex">${color.hex.value}</span>
        </article>`
    })
    document.querySelector(".scheme-colors").innerHTML = schemeColorList
}


