const outputElm = document.querySelector("#output");

document.getElementById("upload").addEventListener("change", (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (v) => {
        var outputData = v.target.result;
        const jdata = JSON.parse(outputData.split(";")[1]);
        const height = jdata.height;
        const width = jdata.width;

        outputElm.style.height = height + "px";
        outputElm.style.width = width + "px";

        const cdata = outputData.replace(outputData.split(";")[1] + ";", "").split(";");
        delete outputData;

        const startDate = new Date();

        for (let i = 0; i < cdata.length; i++) {
            if (!cdata[i]) continue
            const pixel = document.createElement("div");
            pixel.style.backgroundColor = cdata[i];
            console.log("Generating pixel with color " + cdata[i], `(${i + 1})`);

            outputElm.appendChild(pixel);
        }

        const endDate = new Date();
        console.log("-------------------------------");
        console.log("Completed execution in " + ((endDate.getTime() - startDate.getTime()) / 1000) + " seconds.");
    }

    reader.readAsText(file);
})
