
let ourWorkToday = document.querySelector('#ourWork');
let nameEl = document.querySelector('#username');
let dateEl = document.querySelector('#date');
let processEl = document.querySelector('#process');
let questionEl = document.querySelector('#question');
let commentEl = document.querySelector('#comment');
let feedbackEl = document.querySelector('#feedback');
let emailEl = document.querySelector('#email');
//In this part of the code I must thank Caroline Moore, as after a lot of time researching, thinking I remembered her work and thought her solution for inputing photos could work for my purpose.//
function loadFile() {
var target = document.querySelector('#imgLog');
var file   = document.querySelector('input[type=file]').files[0];

var reader = new FileReader();
  
  reader.readAsDataURL(file);
  
  reader.onloadend = function load() {
    target.src = reader.result;
    
  }
}

 function processLog() {
   ourWorkToday.innerHTML += `<p><strong>Date: </strong> ${dateEl.value}</p>
 <p><strong>Educator's Name: </strong> ${nameEl.value}</p><p><strong>Process: </strong> ${processEl.value}</p>
 <p><strong>Question: </strong> ${questionEl.value}</p>
 <p><strong>Comment: </strong> ${commentEl.value}</p>
<p><strong>FeedBack: </strong> ${feedbackEl.value}</p> <div align = center><span id="ourGallery"><img  id="imgLog" src="" alt="" style = "width:40%"></span></div>`;
 }

  function sendLog() {
      return ourWorkToday.innerHTML;
  }