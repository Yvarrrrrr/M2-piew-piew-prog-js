class App
{
    runApplication()
    {
        console.log("hello world");
        let canvas = document.getElementById ("canvasId")
        let g = canvas.getContext("2d")
        document.getElementById("canvasId")

        g.beginPath()
        g.fillStyle = "red"
        g.moveTo(300,100);
        g.lineTo(700,200);
        g.lineTo(600,400);
        g.lineTo(200,300)
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "gray"
        g.moveTo(200,300);
        g.lineTo(600,400);
        g.lineTo(600,600);
        g.lineTo(200,500)
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "gray"
        g.moveTo(700,200);
        g.lineTo(800,300);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "gray"
        g.moveTo(600,400);
        g.lineTo(800,300);
        g.lineTo(800,500);
        g.lineTo(600,600)
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "black"
        g.moveTo(325,500);
        g.lineTo(325,350);
        g.lineTo(450,380);
        g.lineTo(450,530)
        g.closePath();
        g.stroke();
        g.fill()

        console.log(canvas);
    }
}

let app = new App();
app.runApplication();
