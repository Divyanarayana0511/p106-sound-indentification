function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/nu_VqYK6q/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    cat = document.getElementById('cat') ;
    dog = document.getElementById('dog');
    bird = document.getElementById('bird');
    
    if (results[0].label == "Cat") {
      cat.src = 'cat meow.gif';
      dog.src = 'dogimg.jpg';
      bird.src = 'sparrow.jpg';
      
    } else if (results[0].label == "Dog") {
      cat.src = 'catimg.jpg';
      dog.src = 'dogbarking.gif';
      bird.src = 'sparrow.jpg';
    } else if (results[0].label == "Bird") {
      cat.src = 'catimg.jpg';
      dog.src = 'dogimg.jpg';
      bird.src = 'bird chirping.gif';
    }
  }
}
