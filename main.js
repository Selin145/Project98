var SpeechRecognition = window.webkitSpeechRecognition; 
var recognition = new SpeechRecognition();
function start ()
{
    document.getElementById("textbox").innerHTML ="";
    recognition.start();
}
recognition.onresult = function(event) {
    console.log(event);
    var Content = event.results [0] [0].transcript;
    console.log(Content);
    if(Content == "take my selfie")
    {
        console.log("taking selfie ---");
        speak();
    }
    document.getElementById("textbox").innerHTML = Content;
    
}
function speak()
{
    var synth = window.speechSynthesis;
    speak_data = "taking your Selfie in 5 seconds";
    
    var utterThis = new SpeechSynthesisUtterance (speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function()
    { 
        img_id = "selfie1";
        take_snapshot(); 
        speak_data = "Taking your next Selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);

      }, 5000);

    setTimeout(function()
    { 
        img_id = "selfie2";
        take_snapshot(); 
        speak_data = "Taking your next Selfie in 15 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        
    }, 10000);

    setTimeout(function()
    { 
        img_id = "selfie3";
        take_snapshot(); 

    }, 15000);
}
Webcam.set(
    {
        width:360,
        height:250,
        image_format:'png',
        png_quality:90
    }
);
camera = document.getElementById("camera");
function take_snapshot()
{
    console.log(img_id);
    
    Webcam.snap(function(data_uri) {
        if(img_id=="selfie1"){
        document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
        }
        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
        }
        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
        }
    });
}
function save()
{
    link= document.getElementById("link");
    image= document.getElementById("selfie_image").src;
    link.href= image;
    link.click();
}