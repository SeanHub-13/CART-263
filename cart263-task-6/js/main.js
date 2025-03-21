window.onload = run;

function run() {
  //this is related to part D

  let image = document.createElement("img");
  let oneButton = document.querySelector("#stepOneButton");
  let inputCol = document.querySelector("#input-col");
  let phraseInput = document.querySelector("#phrase");
  let container = document.querySelector("#container");
  let resetButton = document.querySelector("#resetButton");
  let aniRef = null;

  image.src = "files/oracle.webp";
  image.style.position = "relative";
  image.style.width = 256 + "px";
  image.style.height = 256 + "px";
  image.style.left = "50%";
  image.style.transform = "translate(-50%, 0%)";

  oneButton.style.position = "relative";
  oneButton.style.left = "50%";
  oneButton.style.transform = "translate(-50%, -20%)";

  inputCol.style.position = "relative";
  inputCol.style.left = "50%";
  inputCol.style.transform = "translate(-50%, -20%)";
  inputCol.style.textAlign = "center"

  phraseInput.style.position = "relative";
  phraseInput.style.left = "50%";
  phraseInput.style.transform = "translate(-50%, -20%)";
  phraseInput.style.textAlign = "center"
  phraseInput.placeholder = ".:| Find out what fate awaits you |:.";

  container.style.backgroundColor = "#4b3752";
  container.appendChild(image);
  container.style.width = "25%";
  container.style.margin = "0 auto";

  resetButton.style.backgroundColor = "purple";
  resetButton.style.position = "relative";
  resetButton.style.left = "50%";
  resetButton.style.transform = "translate(-50%, -5%)";

  document.querySelector("h1").textContent = "FATE IS LIKE THE WEATHER";
  document.querySelector("h1").style.color = "#d6d2b0";
  oneButton.addEventListener("click", fetchText);
  oneButton.textContent = "initialize";
  oneButton.style.backgroundColor = "purple";
  // -------------------------------------------

  /****** PART A:: FETCH */
  async function fetchText() {
    //console.log("in fetch");
    let raw_rainbow_text = "";
    try {
      const response = await fetch('files/rainbow.txt');
      if (response.ok) {
        raw_rainbow_text = await response.text();
      } else {
        console.error('Failed to fetch the text file');
      }
      oneButton.style.display = "none";
      inputCol.style.backgroundColor = "transparent"
      document.querySelector("#phrase").style.display = "block";
      document.querySelector("#produce-poem").style.display = "block";
      document.querySelector("#inputDiv").style.display = "block";
      // document.querySelector("#rainbow_text").textContent = raw_rainbow_text;
      resetButton.addEventListener("click", resetPoem);
      runPartB(raw_rainbow_text);
      // this is related to part D 
      if (document.querySelector("#rainbowCol")) {
        document.querySelector("#rainbowCol").remove()
      }
    } catch (e) {
      console.error('Error fetching the text file:', e);
    }
  }

  /****** PART B:: TEXT PROCESSING  */
  function runPartB(originalRainBowText) {
    document
      .querySelector("#produce-poem")
      .addEventListener("click", producePoem);
    function producePoem() {
      console.log(originalRainBowText);
      document.querySelector("#phrase").style.display = "none";
      document.querySelector("#produce-poem").style.display = "none";
      // Access the value from the input field with id "phrase"
      const phrase = document.querySelector("#phrase").value;
      const phrase_as_array = phrase.split(/[\s.!?\n]+/);
      const rainbow_tokens = originalRainBowText.split(/[\s.!?\n]+/);

      if (phrase_as_array.length > 0 && rainbow_tokens.length > 0) {
        runPartC(rainbow_tokens, phrase_as_array);
      } else {
        console.error('Error: One or both arrays are empty or not correctly formed.');
      }
    }
  }

  let nextWord = null;
  let nextChar = null;
  let rainbowNextWord = null
  let poem_sentence = "";
  /****** PART C:: POEM CREATION  */
  function runPartC(rainbow_tokens, phrase_as_array) {
    console.log(rainbow_tokens);
    console.log(phrase_as_array);
    for (let i = 0; i < phrase_as_array.length; i++) {
      nextWord = phrase_as_array[i];
      // console.log(nextWord)
      for (let j = 0; j < nextWord.length; j++) {
        nextChar = nextWord[j];
        for (let k = 0; k < rainbow_tokens.length; k++) {
          rainbowNextWord = rainbow_tokens[k];
          if (rainbowNextWord[j] == nextChar) {
            //console.log("YES");
            poem_sentence += rainbowNextWord + " ";
            //console.log(poem_sentence);
            break;
          }
        }
        //console.log(nextChar);
      }
    }
    //to next stage
    runPartD();
  }


  /** PART D:: VISUALIZE **/
  let i = 0;
  let speed = 50;
  let shouldStop = null;

  function runPartD() {
    let text = poem_sentence.toString();
    phraseInput.style.display = "none";
    document.querySelector("#produce-poem").style.display = "none";
    //console.log(text);
    inputCol.style.width = "100%"
    inputCol.style.backgroundColor = "purple"
    shouldStop = false;
    typeWriter(text);

    aniRef = window.requestAnimationFrame(animate);
  }


  function typeWriter(text) {
    if (shouldStop == true) {
      i = text.length;
      return;
    }

    if (i < text.length) {
      inputCol.innerHTML += text.charAt(i);
      i++;
      //console.log(i);
      setTimeout(() => { typeWriter(text) }, speed);
    }
  }

  let opacity = 1;
  let opacitySpeed = -0.1;

  function animate() {
    opacity += opacitySpeed
    if (opacity >= 1 || opacity <= 0) {
      opacitySpeed = -opacitySpeed;
    }
    document.querySelector("#inputDiv").style.opacity = opacity;
    aniRef = window.requestAnimationFrame(animate);
  }

  /** PART E:: RESET **/
  function resetPoem() {
    /** TO FILL IN **/
    shouldStop = true;
    inputCol.childNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        node.remove();
      }
    });
    cancelAnimationFrame(aniRef);
    document.querySelector("#inputDiv").style.opacity = 1;
    oneButton.style.display = "block"
    // document.querySelector("#output").innerHTML = "";
    phraseInput.value = "";
    // phraseInput.style.display = "block";
    // document.querySelector("#produce-poem").style.display = "block";
    console.log(document.querySelector("#produce-poem"));

    console.log("RESET");
  }
} //window onload