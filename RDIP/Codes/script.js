//JSON file for storing the corpus and numbered the particular sentences as "one", "two" etc... in the form of keys and the different solutions as array in the form of values.

var corpusEng = {
  one: [
    "John ate an apple before afternoon",
    "before afternoon John ate an apple",
    "John before afternoon ate an apple",
  ],
  two: [
    "some students like to study in the night",
    "at night some students like to study",
  ],
  three: ["John and Mary went to church", "Mary and John went to church"],
  four: [
    "John went to church after eating",
    "after eating John went to church",
    "John after eating went to church",
  ],
  five: ["did he go to market", "he did go to market"],
  six: [
    "the woman who called my sister sells cosmetics",
    "the woman who sells cosmetics called my sister",
    "my sister who sells cosmetics called the woman",
    "my sister who called the woman sells cosmetics",
  ],
  seven: [
    "John goes to the library and studies",
    "John studies and goes to the library",
  ],
  eight: ["John ate an apple so did she", "she ate an apple so did John"],
  nine: [
    "the teacher returned the book after she noticed the error",
    "the teacher noticed the error after she returned the book",
    "after the teacher returned the book she noticed the error",
    "after the teacher noticed the error she returned the book",
    "she returned the book after the teacher noticed the error",
    "she noticed the error after the teacher returned the book",
    "after she returned the book the teacher noticed the error",
    "after she noticed the error the teacher returned the book",
  ],
  ten: [
    "I told her that I bought a book yesterday",
    "I told her yesterday that I bought a book",
    "yesterday I told her that I bought a book",
    "I bought a book that I told her yesterday",
    "I bought a book yesterday that I told her",
    "yesterday I bought a book that I told her",
  ],
};

var corpusHin = {
  one: [
    "राम और श्याम बाजार गयें",
    "राम और श्याम गयें बाजार",
    "बाजार गयें राम और श्याम",
    "गयें बाजार राम और श्याम",
  ],
  two: [
    "राम सोया और श्याम भी",
    "श्याम सोया और राम भी",
    "सोया श्याम और राम भी",
    "सोया राम और श्याम भी",
  ],
  three: [
    "मैंने उसे बताया कि राम सो रहा है",
    "मैंने उसे बताया कि सो रहा है राम",
    "उसे मैंने बताया कि राम सो रहा है",
    "उसे मैंने बताया कि सो रहा है राम",
    "मैंने बताया उसे कि राम सो रहा है",
    "मैंने बताया उसे कि सो रहा है राम",
    "उसे बताया मैंने कि राम सो रहा है",
    "उसे बताया मैंने कि सो रहा है राम",
    "बताया मैंने उसे कि राम सो रहा है",
    "बताया मैंने उसे कि सो रहा है राम",
    "बताया उसे मैंने कि राम सो रहा है",
    "बताया उसे मैंने कि सो रहा है राम",
  ],
  four: [
    "राम खाकर सोया",
    "खाकर राम सोया",
    "राम सोया खाकर",
    "खाकर सोया राम",
    "सोया राम खाकर",
    "सोया खाकर राम",
  ],
  five: [
    "बिल्लियों को मारकर कुत्ता सो गया",
    "मारकर बिल्लियों को कुत्ता सो गया",
    "बिल्लियों को मारकर सो गया कुत्ता",
    "मारकर बिल्लियों को सो गया कुत्ता",
    "कुत्ता सो गया बिल्लियों को मारकर",
    "कुत्ता सो गया मारकर बिल्लियों को",
    "सो गया कुत्ता बिल्लियों को मारकर",
    "सो गया कुत्ता मारकर बिल्लियों को",
  ],
  six: [
    "एक लाल किताब वहाँ है",
    "एक लाल किताब है वहाँ",
    "वहाँ है एक लाल किताब",
    "है वहाँ एक लाल किताब",
  ],
  seven: [
    "एक बड़ी सी किताब वहाँ है",
    "एक बड़ी सी किताब है वहाँ",
    "बड़ी सी एक किताब वहाँ है",
    "बड़ी सी एक किताब है वहाँ",
    "वहाँ है एक बड़ी सी किताब",
    "वहाँ है बड़ी सी एक किताब",
    "है वहाँ एक बड़ी सी किताब",
    "है वहाँ बड़ी सी एक किताब",
  ],
};

//defined variables for different functioning of english and hindi options

var cOne = 1;
var cTwo = 1;
var countOne = 1;
var countTwo = 1;
var correctSentenceEng;
var correctSentenceHin;

const generateRandomNumber = (totalSentence) =>
  Math.floor(totalSentence * Math.random()) + 1;

//To generate random words selected from random sentences

switch (generateRandomNumber(10)) {
  case 1:
    var shuffledEng = corpusEng.one[0]
      .split(" ")
      .sort(() => 0.5 - Math.random());
    correctSentenceEng = corpusEng.one;
    break;
  case 2:
    var shuffledEng = corpusEng.two[0]
      .split(" ")
      .sort(() => 0.5 - Math.random());
    correctSentenceEng = corpusEng.two;
    break;
  case 3:
    var shuffledEng = corpusEng.three[0]
      .split(" ")
      .sort(() => 0.5 - Math.random());
    correctSentenceEng = corpusEng.three;

    break;
  case 4:
    var shuffledEng = corpusEng.four[0]
      .split(" ")
      .sort(() => 0.5 - Math.random());
    correctSentenceEng = corpusEng.four;

    break;
  case 5:
    var shuffledEng = corpusEng.five[0]
      .split(" ")
      .sort(() => 0.5 - Math.random());
    correctSentenceEng = corpusEng.five;

    break;
  case 6:
    var shuffledEng = corpusEng.six[0]
      .split(" ")
      .sort(() => 0.5 - Math.random());
    correctSentenceEng = corpusEng.six;

    break;
  case 7:
    var shuffledEng = corpusEng.seven[0]
      .split(" ")
      .sort(() => 0.5 - Math.random());
    correctSentenceEng = corpusEng.seven;

    break;
  case 8:
    var shuffledEng = corpusEng.eight[0]
      .split(" ")
      .sort(() => 0.5 - Math.random());
    correctSentenceEng = corpusEng.eight;

    break;
  case 9:
    var shuffledEng = corpusEng.nine[0]
      .split(" ")
      .sort(() => 0.5 - Math.random());
    correctSentenceEng = corpusEng.nine;

    break;
  case 10:
    var shuffledEng = corpusEng.ten[0]
      .split(" ")
      .sort(() => 0.5 - Math.random());
    correctSentenceEng = corpusEng.ten;

    break;
  default:
    var shuffledEng = corpusEng.ten[0]
      .split(" ")
      .sort(() => 0.5 - Math.random());
    correctSentenceEng = corpusEng.ten;

    break;
}

switch (generateRandomNumber(10)) {
  case 1:
    var shuffledHin = corpusHin.one[0]
      .split(" ")
      .sort(() => 0.5 - Math.random());
    correctSentenceHin = corpusHin.one;
    break;
  case 2:
    var shuffledHin = corpusHin.two[0]
      .split(" ")
      .sort(() => 0.5 - Math.random());
    correctSentenceHin = corpusHin.two;
    break;
  case 3:
    var shuffledHin = corpusHin.three[0]
      .split(" ")
      .sort(() => 0.5 - Math.random());
    correctSentenceHin = corpusHin.three;
    break;
  case 4:
    var shuffledHin = corpusHin.four[0]
      .split(" ")
      .sort(() => 0.5 - Math.random());
    correctSentenceHin = corpusHin.four;
    break;
  case 5:
    var shuffledHin = corpusHin.five[0]
      .split(" ")
      .sort(() => 0.5 - Math.random());
    correctSentenceHin = corpusHin.five;
    break;
  case 6:
    var shuffledHin = corpusHin.six[0]
      .split(" ")
      .sort(() => 0.5 - Math.random());
    correctSentenceHin = corpusHin.six;
    break;
  case 7:
    var shuffledHin = corpusHin.seven[0]
      .split(" ")
      .sort(() => 0.5 - Math.random());
    correctSentenceHin = corpusHin.seven;
    break;
  default:
    var shuffledHin = corpusHin.seven[0]
      .split(" ")
      .sort(() => 0.5 - Math.random());
    correctSentenceHin = corpusHin.seven;
    break;
}

var langSelect = document.getElementById("selectId");
var divOne = document.getElementsByClassName("taskOne");
var btnDisplayOne = document.getElementsByClassName("buttonsSelectOne");
var btnDisplayTwo = document.getElementsByClassName("buttonsSelectTwo");

//For selecting languages

langSelect.addEventListener("change", (event) => {
  divOne[0].classList.add("noDisplay");
  btnDisplayOne[0].classList.add("noDisplay");
  btnDisplayTwo[0].classList.add("noDisplay");
  btnDispDiv.classList.add("noDisplay");
  btndisp.innerHTML = "";

  var abc = 0;

  while (abc < 1) {
    if (event.target.value === "english") {
      stringOne = "One";
      stringTwo = "";
      divOne[0].classList.remove("noDisplay");
      btnDisplayOne[0].classList.remove("noDisplay");

      if (cOne == 1) {
        displayOneEng();
        cOne = 0;
      }
      buttonClickOne();
    } else if (event.target.value === "hindi") {
      stringOne = "";
      stringTwo = "Two";
      divOne[0].classList.remove("noDisplay");
      btnDisplayTwo[0].classList.remove("noDisplay");

      if (cTwo == 1) {
        displayOneHin();
        cTwo = 0;
      }
      buttonClickTwo();
    } else {
      abc = 1;
      alert("Please select any language!");
    }
    abc++;
  }
});

var btnOne;
var btnTwo;

//Functions to display word buttons

const displayOneEng = function () {
  for (i in shuffledEng) {
    btnOne = document.createElement("button");
    btnOne.innerHTML = shuffledEng[i];
    btnOne.classList.add("btnWordEng");
    document.body.appendChild(btnOne);
    document.querySelector(".buttonsSelectOne").appendChild(btnOne);
  }
};

const displayOneHin = function () {
  for (let j = 0; j < shuffledHin.length; j++) {
    btnTwo = document.createElement("button");
    btnTwo.innerHTML = shuffledHin[j];
    btnTwo.classList.add("btnWordHin");
    document.body.appendChild(btnTwo);
    document.querySelector(".buttonsSelectTwo").appendChild(btnTwo);
  }
};

//Functions so that after button click, the word should display in the below sentence

var btnDispDiv = document.querySelector(".taskTwo");
var btndisp = document.querySelector(".enteredSentence");

const buttonClickOne = () => {
  document
    .querySelector(".buttonsSelectOne")
    .addEventListener("click", (event) => {
      document.querySelector(".buttonsSelectOne").removeChild(event.target);
      btnDispDiv.classList.remove("noDisplay");
      btndisp.innerHTML += `${event.target.innerHTML} `;
      for (let i = 0; i < correctSentenceEng.length; i++) {
        if (
          btndisp.innerHTML.split(" ").join("").length ==
          correctSentenceEng[i].split(" ").join("").length
        ) {
          document.querySelector(".resultBtn").classList.remove("noDisplay");
        }
      }
    });
};

const buttonClickTwo = () => {
  document
    .querySelector(".buttonsSelectTwo")
    .addEventListener("click", (event) => {
      document.querySelector(".buttonsSelectTwo").removeChild(event.target);
      btnDispDiv.classList.remove("noDisplay");
      btndisp.innerHTML += `${event.target.innerHTML} `;
      for (let j = 0; j < correctSentenceEng.length; j++) {
        if (
          btndisp.innerHTML.split(" ").join("").length ==
          correctSentenceHin[j].split(" ").join("").length
        ) {
          document.querySelector(".resultBtn").classList.remove("noDisplay");
        }
      }
    });
};

//After the "Re-form the Sentence" button is clicked, the words go to their original places in the form of buttons

var reformBtn = document.querySelector(".btnWords");

reformBtn.addEventListener("click", () => {
  countOne++;
  countTwo++;

  if (stringOne == "One" && stringTwo == "") {
    //For english language
    if (countOne == 1) {
      btnDispDiv.classList.remove("noDisplay");
    }
    document.querySelector(".buttonsSelectOne").innerHTML = null;
    displayOneEng();

    document.querySelector(".enteredSentence").innerHTML = "";
    btnDispDiv.classList.add("noDisplay");
  }

  if (stringOne == "" && stringTwo == "Two") {
    //For hindi language
    if (countTwo == 1) {
      btnDispDiv.classList.remove("noDisplay");
    }

    document.querySelector(".buttonsSelectTwo").innerHTML = null;
    displayOneHin();

    document.querySelector(".enteredSentence").innerHTML = "";
    btnDispDiv.classList.add("noDisplay");
  }
});

//function to check if the entered sentence is correct or not 

const getANS = () => {
  if (stringOne == "One" && stringTwo == "") {
    //For english language
    if (countOne == 1) {
      for (let i = 0; i < correctSentenceEng.length; i++) {
        if (btndisp.innerHTML == `${correctSentenceEng[i]} `) {
          document.querySelector(".correctAns").classList.remove("noDisplay");
          document.querySelector(".wrongAns").classList.add("noDisplay");
          document.querySelector(".getAnsBtn").classList.add("noDisplay");
        } else {
          document.querySelector(".wrongAns").classList.remove("noDisplay");
          document.querySelector(".getAnsBtn").classList.remove("noDisplay");
          var count1 = 0;
          document
            .querySelector(".getAnsBtn")
            .addEventListener("click", (event) => {
              count1++;
              if (count1 % 4 != 0) {
                event.target.innerHTML = "Hide the correct Sentence";
                document
                  .querySelector(".correctSentences")
                  .classList.remove("noDisplay");
                document.querySelector(".correctSentences").innerHTML += `${correctSentenceEng[i]}`;
                document.querySelector("getAnsBtn");
              } else if (count1 % 4 == 0) {
                event.target.innerHTML = "Get the correct Sentence";
                document.querySelector(".correctSentences").innerHTML = "";
                document
                  .querySelector(".correctSentences")
                  .classList.add("noDisplay");
              }
            });
        }
      }
    }
  }
  if (stringOne == "" && stringTwo == "Two") {
    //For hindi language
    if (countTwo == 1) {
      for (let i = 0; i < correctSentenceHin.length; i++) {
        if (btndisp.innerHTML == `${correctSentenceHin[i]} `) {
          document.querySelector(".correctAns").classList.remove("noDisplay");
          document.querySelector(".wrongAns").classList.add("noDisplay");
          document.querySelector(".getAnsBtn").classList.add("noDisplay");
        } else {
          document.querySelector(".wrongAns").classList.remove("noDisplay");
          document.querySelector(".getAnsBtn").classList.remove("noDisplay");
          var count2 = 0;
          document
            .querySelector(".getAnsBtn")
            .addEventListener("click", (event) => {
              count2++;
              if (count2 % 4 != 0) {
                event.target.innerHTML = "Hide the correct Sentence";
                document
                  .querySelector(".correctSentences")
                  .classList.remove("noDisplay");
                document.querySelector(".correctSentences").innerHTML += `${correctSentenceHin[i]}`;
                document.querySelector("getAnsBtn");
              } else if (count2 % 4 == 0) {
                event.target.innerHTML = "Get the correct Sentence";
                document.querySelector(".correctSentences").innerHTML = "";
                document
                  .querySelector(".correctSentences")
                  .classList.add("noDisplay");
              }
            });
        }
      }
    }
  }
};
