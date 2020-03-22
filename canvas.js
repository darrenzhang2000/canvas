window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas")
    const ctx = canvas.getContext("2d")
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth

    // ctx.fillRect(0, 0, 100, 100)

    // ctx.strokeStyle = "blue"
    // ctx.lineWidth = 5
    // ctx.strokeRect(150, 150, 10, 10)
    // ctx.fillStyle = "red"
    // ctx.fillRect(0, 150, 30, 30)

    let drawing = false

    let startPosition = e => {
        //resets path so new drawing begins where you mousedown
        ctx.beginPath()
        ctx.moveTo(e.clientX, e.clientY)

        drawing = true

        //so that single points are drawn
        draw(e)
    }

    let finishedPosition = () => {
        drawing = false
    }

    let draw = e => {
        if (!drawing) return
        ctx.lineWidth = 10
        ctx.lineCap = "round"

        ctx.lineTo(e.clientX, e.clientY)
        ctx.stroke()
    }

    canvas.addEventListener("mousedown", startPosition)
    canvas.addEventListener("mouseup", finishedPosition)
    canvas.addEventListener("mousemove", draw)
})
