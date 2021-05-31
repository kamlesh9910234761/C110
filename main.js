Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90,
});

camera = document.getElementById("camera");
Webcam.attach('#camera');
console.log('ml5 version:', ml5.version);
classefer = mlf.imageclassefer('https://teachablemachine.withgoogle.com/models.v_sl95BzE/model.jason' , modelLoaded);
function modelLoaded() {
    console.log('Model Loaded!');
}
function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
function gotResults(error, results); {
    if (error){

        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}