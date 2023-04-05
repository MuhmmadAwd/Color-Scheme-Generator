
function init() {
    const schemeForm = document.getElementById("form-scheme")
    const themeBtn = document.getElementById("btn-theme")

    schemeForm.addEventListener("submit", fetchColorScheme)
    themeBtn.addEventListener("click", toggleTheme)
}

function fetchColorScheme(e) {
    e.preventDefault()

    const colorSeed = document.querySelector(".color-input").value.slice(1)
    const mode = document.querySelector("#scheme-select").value

    fetch(`https://www.thecolorapi.com/scheme?hex=${colorSeed}&mode=${mode}&count=5`)
        .then((res) => res.json())
        .then((data) => renderSchemePalette(data.colors))
}

function generateSchemePalette(colors) {
    let SchemePalette = ''

    colors.map((color) => {
        SchemePalette += `
        <article style="background-color: ${color.hex.value};" class="scheme-color">
        <span class="scheme-hex theme">${color.hex.value}</span>
        </article>`
    })

    return SchemePalette
}

function renderSchemePalette(colors) {
    document.querySelector(".scheme-colors").innerHTML = generateSchemePalette(colors)
}

function toggleTheme() {
    document.querySelector(".theme").classList.toggle("theme-dark")
    document.querySelector(".fa-sun-o").classList.toggle("fa-moon-o")
}

document.addEventListener("DOMContentLoaded", init)

