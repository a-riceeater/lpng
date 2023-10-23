const outputElm = document.querySelector("#output");
var outputData = "";

outputElm.style.width = document.querySelector("#width-i").value + "px";
outputElm.style.height = document.querySelector("#height-i").value + "px";

document.querySelectorAll("input").forEach(el => {
    el.addEventListener("keyup", () => {
        outputElm.style.width = document.querySelector("#width-i").value + "px";
        outputElm.style.height = document.querySelector("#height-i").value + "px";
    })
})

document.querySelector("#random").addEventListener("click", () => {
    const width = parseInt(outputElm.style.width.replace("px", ""));
    const height = parseInt(outputElm.style.height.replace("px", ""));
    const pixels = width * height;

    outputData += ";" + JSON.stringify({ width: width, height: height }) + ";";
    document.querySelector("#output > h1").remove();

    const startDate = new Date();

    for (let i = 0; i < pixels; i++) {
        const pixel = document.createElement("div");

        const color = "#" + Math.floor(Math.random() * 16777215).toString(16);

        pixel.style.backgroundColor = color;
        console.log("Generating pixel with color " + color, `(${i + 1}/${pixels})`);
        outputElm.appendChild(pixel);

        outputData += color + ";"

        if (i == pixels - 1) {
            const endDate = new Date();
            console.log("-------------------------------");
            console.log("Completed execution in " + ((endDate.getTime() - startDate.getTime()) / 1000) + " seconds.");
            document.body.innerHTML += `<a download="image.lpng" href="data:text/plain;charset=utf-8,${encodeURIComponent(outputData)}">Download</a>`
        }
    }
})