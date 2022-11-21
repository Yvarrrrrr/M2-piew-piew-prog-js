class App
{
    runApplication()
    {
        console.log("hello world");
        let appName = "Jantje";
        let versienummer = 0.9;
        let versiedatum = "21-11-2022";
        let autheur = "yvar";
        let copyright = "okey";
        let distributeur = "nee frietjes";
        let darkmode = true;

        console.log(appName);
        console.log(versienummer);
        console.log(versiedatum);
        console.log(autheur);
        console.log(copyright);
        console.log(distributeur);
        console.log(darkmode)
    }
}

let app = new App();
app.runApplication();
