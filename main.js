Status = ""

function setup()
{
    canvas = createCanvas(380, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,350);
    video.hide();
}
function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    input_text = document.getElementById("input_thingy").value;
}

function modelLoaded()
{
    console.log("model loaded");
    Status = true;
}

function draw()
{
    image(video, 0, 0, 380, 350);
}

