

let data = [
    {
      "question": "What was Tandem previous name?",
      "incorrect": ["Tandem", "Burger Shack", "Extraordinary Humans"],
      "correct": "Devmynd"
    },
    {
      "question": "In Shakespeare's play Julius Caesar, Caesar's last words were...",
      "incorrect": ["Iacta alea est!", "Vidi, vini, vici", "Aegri somnia vana"],
      "correct": "Et tu, Brute?"
    },
    {
      "question": "A group of tigers are referred to as:",
      "incorrect": ["Chowder", "Pride", "Destruction"],
      "correct": "Ambush"
    },
    {
      "question": "What is the top speed an average cat can travel?",
      "incorrect": ["42 mph", "13 mph", "9 mph"],
      "correct": "31 mph"
    },
    {
      "question": "A cat can jump to _____ times its own height:",
      "incorrect": ["3", "9", "7"],
      "correct": "5"
    },
    {
      "question": "What is the only letter that doesn't appear in a US state name?",
      "incorrect": ["M", "Z", "X"],
      "correct": "Q"
    },
    {
      "question": "What is the name for a cow-bison hybrid?",
      "incorrect": ["Cowson", "Bicow", "Mooson"],
      "correct": "Beefalo"
    },
    {
      "question": "What is the largest freshwater lake in the world?",
      "incorrect": ["Lake Baikal", "Lake Michigan", "Lake Victoria"],
      "correct": "Lake Superior"
    },
    {
      "question": "In a website address bar, what does WWW stand for?",
      "incorrect": ["Wild Wild West", "War World Web"],
      "correct": "World Wide Web"
    },
    {
      "question": "In a game of bingo, what number is represented by the name two little ducks?",
      "incorrect": ["20", "55", "77"],
      "correct": "22"
    },
    {
      "question": "According to Greek mythology, who was the first woman on Earth?",
      "incorrect": ["Lilith", "Eve", "Hera"],
      "correct": "Pandora"
    },
    {
      "question": "In which European city would you find Orly airport?",
      "incorrect": ["London", "Belgium", "Munich"],
      "correct": "Paris"
    },
    {
      "question": "Where would you find the Sea of Tranquility?",
      "incorrect": ["California", "Siberia", "China"],
      "correct": "The Moon"
    },
    {
      "question": "Which artist painted 'Girl with a Pearl Earrin'?",
      "incorrect": ["Van Gogh", "Picasso", "Da Vinci"],
      "correct": "Vermeer"
    },
    {
      "question": "What is the official name for the 'hashtag' symbol?",
      "incorrect": ["Number sign", "Hash Sign", "Pound"],
      "correct": "Octothorpe"
    },
    {
      "question": "Not American at all, where is apple pie from?",
      "incorrect": ["Japan", "Ethiopia", "Canada"],
      "correct": "England"
    },
    {
      "question": "What is the national animal of Scotland?",
      "incorrect": ["Bear", "Rabbit", "Seal"],
      "correct": "Unicorn"
    },
    {
      "question": "Where in the world is the only place where Canada is *due south*",
      "incorrect": ["Alaska", "Russia", "Washington"],
      "correct": "Detroit"
    },
    {
      "question": "Approximately how many grapes go into a bottle of wine?",
      "incorrect": ["500", "200", "1000"],
      "correct": "700"
    },
    {
      "question": "How much does a US One Dollar Bill cost to make?",
      "incorrect": ["$0.25", "$1", "$5"],
      "correct": "$0.05"
    },
    {
      "question": "The Vatican bank has the only ATM in the world that allows users to do what?",
      "incorrect": [
        "Receive withdrawls in rosary beads",
        "Vote for the Pope",
        "Purchase indulgences"
      ],
      "correct": "Perform transactions in Latin"
    }
  ]



let questionNum = document.getElementById('question-number')
let btn = document.getElementById('btn')

let content = document.getElementById('content')
const div = document.createElement('div')

let answer = document.getElementById('answer-id')

let startBtn = document.getElementById('start-btn')

let selectedValue = document.querySelector('input[name="options"]:checked')



let p = content.appendChild(div)

let options = document.getElementById('options')

let checkAnswerBtn = document.getElementById('checkAnswer')

let questionBody = document.getElementById('q-body')

let score = []
let ansArray = []
let correctAnswer = 0;
//function to show question based on counter

/**
 * Assign the first question as 0 and display it
 * Clicking the next button should increase counter by 1 
 * and run a function to show question + 1
 */

 let counter = 0;


let showQuesion = () => {

  if(counter === data.length){
    console.log('End of questions')
    questionBody.innerHTML = 'This is the end of the questions'
    return;
  }

  questionNumber = counter
  questionNum.innerHTML = `<p class="flex justify-center font-bold" >Question Number ${questionNumber + 1} of ${data.length}</p>`
  content.innerHTML = ( `
       <div>

       </div>
       <div class="ml-2">
       <p>${data[counter].question}?</p>
       </div>

  `)
   let questionOption = data[counter].incorrect
   questionOption.push(data[counter].correct)
   //Todo write native sort/shuffle function
    let app = optionsShuffle(questionOption)
   ansArray.push(data[counter].correct)
   options.innerHTML = '';
    app.forEach((element,index) => {
    let newLine = document.createElement('br')
    let inputValue = document.createElement('input')
    element.toString()
    inputValue.value = element
    inputValue.setAttribute('type', 'radio')
    inputValue.setAttribute('name', 'options')
    inputValue.setAttribute('class', 'radio1')
    inputValue.setAttribute('id', `radio${index}`)
    let label = document.createElement('label')
    label.textContent = element 
    label.setAttribute('for', `radio${index}`)
    options.appendChild(inputValue)
    options.appendChild(label)
    options.appendChild(newLine)
    //inputValue.addEventListener('click', checkAnswer)
  });
  console.log(score)
  counter++
}
//console.log(options)

btn.addEventListener('click', showQuesion)


//     if(userOption != null){
//       console.log(userOption)
//     }

let checkAnswer = () => {
  let answerScore = 0
  let userOption = document.querySelector('input[name="options"]:checked').value
  console.log(userOption)
  console.log(ansArray)
  if(userOption != null){
    if(ansArray.includes(userOption)){
      correctAnswer += 1
      score.push(answerScore)
      console.log(userOption)
      console.log(correctAnswer);
      let element = document.querySelector('input[name="options"]:checked')
      console.log(element)
      console.log('correct answer')
      return
    }
    answer = 0;
    score.push(answerScore)
    console.log('inccorrect answer')
    return
  }
  console.log(score)
 
}

let optionsShuffle = (arr) => {
  for(let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * ( i + 1))
    let t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
  }
  return arr
}

// 1. Create the interval
// 2. Create a counter variable
// 3. Use the counter to display items from the array
// 4. Stop the interval when we've show all items

//function initialize () {
  // startBtn.click()
  //startBtn.onclick = (e) => {
    //e.currentTarget.remove()
    showQuesion()
    //btn.addEventListener('click', nextButton())
    //console.log(e)
  

  //showQuestions()





// let btnClick = (e) => {
//   //e.currentTarget.remove()
//   alert('btn clicked')
//   console.log('clicked')
//   console.log(e.currentTarget)
// }









//shuffle all elements in array
// const shuffleArray = (arr) => {
//     for (let i = arr.length-1; i >= 0; i--) {
//         let randomIndex = Math.floor(Math.random() * (i + 1))
//         let valueAtIndex = arr[randomIndex]

//         arr[randomIndex] = arr[i]
//         arr[i] = valueAtIndex
//         arr[i].incorrect = arr[i].incorrect.concat(arr[i].correct)
//         //console.log(arr[i].question)
//         for(let j = 0; j<arr[i].incorrect.length; j++) {
//             //console.log(arr[i].incorrect)
        
//         }
//     }
//     return arr
// }

//shuffleArray(data);
//initialize()



