// let questions = [
//     {
//     numb: 1,
//     question: "What does HTML stand for?",
//     answer: "Hyper Text Markup Language",
//     options: [
//       "Hyper Text Preprocessor",
//       "Hyper Text Markup Language",
//       "Hyper Text Multiple Language",
//       "Hyper Tool Multi Language"
//     ]
//   },
//     {
//     numb: 2,
//     question: "What does CSS stand for?",
//     answer: "Cascading Style Sheet",
//     options: [
//       "Common Style Sheet",
//       "Colorful Style Sheet",
//       "Computer Style Sheet",
//       "Cascading Style Sheet"
//     ]
//   },
//     {
//     numb: 3,
//     question: "What does PHP stand for?",
//     answer: "Hypertext Preprocessor",
//     options: [
//       "Hypertext Preprocessor",
//       "Hypertext Programming",
//       "Hypertext Preprogramming",
//       "Hometext Preprocessor"
//     ]
//   },
//     {
//     numb: 4,
//     question: "What does SQL stand for?",
//     answer: "Structured Query Language",
//     options: [
//       "Stylish Question Language",
//       "Stylesheet Query Language",
//       "Statement Question Language",
//       "Structured Query Language"
//     ]
//   },
//     {
//     numb: 5,
//     question: "What does XML stand for?",
//     answer: "eXtensible Markup Language",
//     options: [
//       "eXtensible Markup Language",
//       "eXecutable Multiple Language",
//       "eXTra Multi-Program Language",
//       "eXamine Multiple Language"
//     ]
//   },
//   // you can uncomment the below codes and make duplicate as more as you want to add question
//   // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

//   //   {
//   //   numb: 6,
//   //   question: "Your Question is Here",
//   //   answer: "Correct answer of the question is here",
//   //   options: [
//   //     "Option 1",
//   //     "option 2",
//   //     "option 3",
//   //     "option 4"
//   //   ]
//   // },
// ];






console.log("JS working")
// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "What is HTML?",
    answer: "All of the mentioned",
    options: [
      "HTML describes the structure of a webpage",
      "HTML is the standard markup language mainly used to create web pages",
      "HTML consists of a set of elements that helps the browser how to view the content",
      "All of the mentioned"
    ]
  },
    {
    numb: 2,
    question: "Who is the father of HTML?",
    answer: "Tim Berners-Lee",
    options: [
      "Rasmus Lerdorf",
      "Tim Berners-Lee",
      "Brendan Eich",
      "Sergey Brin"
    ]
  },
    {
    numb: 3,
    question: "HTML stands for __________",
    answer: "HyperText Markup Language",
    options: [
      "HyperText Markup Language",
      "HyperText Machine Language",
      "HyperText Marking Language",
      "HighText Marking Language"
    ]
  },
    {
    numb: 4,
    question: "Which of the following is used to read an HTML page and render it?",
    answer: "Web browser",
    options: [
      "Web server",
      "Web network",
      "Web browser",
      "Web matrix"
    ]
  },
//     {
//     numb: 5,
//     question: "",
//     answer: "",
//     options: [
//       "",
//       "",
//       "",
//       ""
//     ]
//   },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

    {
    numb: 5,
    question: "In which part of the HTML metadata is contained?",
    answer: "head tag",
    options: [
      "head tag",
      "title tag",
      "html tag",
      "body tag"
    ]
  },

  {
        numb: 6,
        question: "HTML is a subset of ____",
        answer: "SGML",
        options: [
          "SGMT",
          "SGML",
          "SGME",
          "XHTML"
        ]
    },

    {
        numb: 7,
        question: "Which element is used for or styling HTML5 layout?",
        answer: "CSS",
        options: [
          "CSS",
          "jQuery",
          "JavaScript",
          "PHP"
        ]
      },

      {
        numb: 8,
        question: "Which of the following is not the element associated with the HTML table layout?",
        answer: "color",
        options: [
          "alignment",
          "color",
          "size",
          "spanning"
        ]
      },

      {
        numb: 9,
        question: "What is DOM in HTML?",
        answer: "Convention for representing and interacting with objects in html documents",
        options: [
          "Language dependent application programming",
          "Hierarchy of objects in ASP.NET",
          "Application programming interface",
          "Convention for representing and interacting with objects in html documents"
        ]
      },

      {
        numb: 10,
        question: "Which character is used to represent when a tag is closed in HTML?",
        answer: "/",
        options: [
          "#",
          "!",
          "/",
          "@"
        ]
      },

];

//selecting all required elements
// const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
// const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// if startQuiz button clicked
// start_btn.onclick=()=>{
//     info_box.classList.add("activeInfo"); //show info box
// }

// if exitQuiz button clicked
// exit_btn.onclick=()=>{
//     info_box.classList.remove("activeInfo"); //hide info box
// }

// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    console.log('hi')
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(20); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}

let timeValue =  20;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

let restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 20; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}

// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
  window.history.back(); //reload the current window
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span> Congrats! , You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 1){ // if user scored more than 1
        let scoreTag = '<span> Nice , You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span> Sorry , You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

// function showResult() {
//   // ... existing code ...

//   // Use AJAX to send the user score to the Django view
//   $.ajax({
//       type: 'POST',
//       url: '/your_django_view_url/',  // Replace with the actual URL of your Django view
//       data: {
//           'user_score': userScore,
//       },
//       success: function(data) {
//           // Update the result box with the data returned from the Django view
//           scoreText.innerHTML = data.result_html;
//       },
//       error: function(error) {
//           console.log(error);
//       }
//     });
// }

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            let correcAns = questions[que_count].answer; //getting correct answer from array
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn.classList.add("show"); //show the next button if user selected any option
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 549){ //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}

function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}



// userScore


$.ajax({
    url: "{% url 'quiz1' %}",
    data: {
        // here getdata should be a string so that
        // in your views.py you can fetch the value using get('getdata')
        'getdata': JSON.stringify(hot.getData())
    },
    dataType: 'json',
    success: function (res, status) {
        alert(res);
        alert(status);
    },
    error: function (res) {
        alert(res.status);                                                                                                                          
    }
});