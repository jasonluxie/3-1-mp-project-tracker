let modalButton = $("#modal-trigger");
let timeText = $("#time");

function timeRender() {
    let timeTick = setInterval(function () {
        timeText.text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    }, 1000);
}

timeRender()
