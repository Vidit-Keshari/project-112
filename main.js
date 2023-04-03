Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("snapshot").innerHTML = "<img id='captured_image' src='" + data_uri + "'/>";
    });
}

console.log("ml5 version:", ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/PgVnZqmEv/model.json', modelLoaded);

function modelLoaded()
{
    console.log("Model loaded successfully!");
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "prediction is : " + prediction;
    var utter_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
}

function check() {
    img = document.getElementById('captured_images');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        prediction = results[0].label;
        speak()
        if (results[0].label = "doubt") {
            document.getElementById("update_emoji").innerHTML = "&#9757;";
        }
        if (results[0].label = "victory") {
            document.getElementById("update_emoji").innerHTML = "&#9757;";
        }
        if (results[0].label = "hello") {
            document.getElementById("update_emoji").innerHTML = "&#9757;";
        }
        if (results[0].label = "amazing") {
            document.getElementById("update_emoji").innerHTML = "&#9757;";
        }
        if (results[0].label = "like") {
            document.getElementById("update_emoji").innerHTML = "&#9757;";
        }
        if (results[0].label = "dislike") {
            document.getElementById("update_emoji").innerHTML = "&#9757;";
        }
    }
}