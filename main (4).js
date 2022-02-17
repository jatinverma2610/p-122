x = 0;
y = 0;
draw_circle = "";
draw_rect = "";

var SpeechRecogition = window.webkitSpeechRecognition;

var recognition = new SpeechRecogition();

function start()
{
    document.getElementById("status").innerHTML = "speech is listening please speak";
    recognition.start();
}

recognition.onresult = function(event) {

  console.log(event);

  var content = event.result[0][0].transcript;

     document.getElementById("status").innerHTML = "the Speech has been recognized as: " + content;
      if(content =="circle")
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHtTML = "started drawing circle ";
        draw_circle = "set";
      }
      if(content =="rectangle")
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHtTML = "started drawing rectangle ";
        draw_rect = "set";
      }

}

function setup() {
    if(draw_circle == "set")
    {
        radius = Math.floor(Math.random() * 100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "Circle is drawn. ";
        draw_circle = "";
    }
    if(draw_rect== "set")
    {
        
        rect(x,y,70,50);
        document.getElementById("status").innerHTML = "Rectangle is drawn. ";
        draw_rect = "";
    }
}