/*1. Array Filter: Create a function that filters an array of numbers to return only 
even numbers.*/

function evenFilter() {
  let arr = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 !== 0) {
      arr.push(input[i]);
    }
  }
  console.log("evenNums:" + arr);
}

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
evenFilter();

/*2. Array Flattening: Create a function that flattens a nested array of any depth. 
Input: [1, [2, [3, [4]], 5]]*/

let res = [];

function flattenNums(array) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      array = array[i];
      flattenNums(array);
    } else {
      res.push(array[i]);
    }
  }
  return res;
}

const input1 = [1, [2, [3, [4]], 5]];
console.log(flattenNums(input1));

/*3. Random Joke Generator: Create a button that fetches a random joke from
Chuck Norris API and shows a loading state while fetching.*/

const buttonEL = document.querySelector(".joke-button");

buttonEL.addEventListener("click", getDataFromAPI);
const pEL = document.createElement("p");
pEL.classList.add("joke-paragraph");
pEL.textContent = "";

const jokeEL = document.createElement("div");
jokeEL.classList.add("joke-box");
jokeEL.remove();

async function getDataFromAPI() {
  const loadEl = document.querySelector(".joke-loading");
  loadEl.style.display = "block";

  try {
    const url = "https://api.chucknorris.io/jokes/random";
    const response = await fetch(url, {
      method: "GET",
    });
    const jokes = await response.json();
    const containerEL = document.querySelector(".joke-container");

    loadEl.style.display = "none";

    pEL.textContent = jokes.value;

    jokeEL.append(pEL);
    containerEL.append(jokeEL);
    console.log(jokes);
  } catch (error) {
    console.log(error);
  }
}
getDataFromAPI();

//Create a function to sort an array of numbers and display the sorted list.

function sortedArr(theArr) {
  for (let j = 0; j < theArr.length; j++) {
    for (let i = 0; i < theArr.length - j; i++) {
      if (theArr[i] > theArr[i + 1]) {
        let temp = theArr[i];
        theArr[i] = theArr[i + 1];
        theArr[i + 1] = temp;
      }
    }
  }

  return theArr;
}

const input2 = [4, 9, 32, 12, 6, 8];
console.log(sortedArr(input2));

/*5. Object Property Counter: Write a function that counts how many properties an 
object has, including nested objects. */

function countProperties(obj) {
  let count = 0;

  function counter(myObj) {
    for (let key in myObj) {
      if (myObj.hasOwnProperty(key)) {
        count++;
        if (typeof myObj[key] === "object" && myObj[key] !== null) {
          counter(myObj[key]);
        }
      }
    }
  }

  counter(obj);
  return count;
}

// Example usage
const inputobj = {
  name: "Reyhane",
  id: "Rihayn",
  number: {
    number: 9123456789,
    code: "098",
  },
};

console.log("number of properties:", countProperties(inputobj));

//6. Change the background color of the webpage when a button is clicked.

const buttonColorEL = document.querySelector(".color-button");

buttonColorEL.addEventListener("click", () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});

/*7. Create a simple countdown timer that counts down from a specified number 
of seconds. */

const buttonTimerEL = document.querySelector(".startButton");
buttonTimerEL.addEventListener("click", function () {
  let countdownSeconds = 5;
  const timerDisplay = document.querySelector(".timer");

  timerDisplay.textContent = countdownSeconds;

  const countdownInterval = setInterval(function () {
    countdownSeconds--;
    timerDisplay.textContent = countdownSeconds;

    if (countdownSeconds <= 0) {
      clearInterval(countdownInterval);
      timerDisplay.textContent = "Time's up!";
    }
  }, 1000);
});

// 8. Card Generator: Create a function that generates a card element with a title,
// content, and a delete button.

document
  .querySelector(".generateButton")
  .addEventListener("click", function () {
    const title = document.querySelector(".cardTitle").value;
    const content = document.querySelector(".cardContent").value;

    createCard(title, content);
    document.querySelector(".cardTitle").value = "";
    document.querySelector(".cardContent").value = "";
  });

function createCard(title, content) {
  const cardContainer = document.querySelector(".cardContainer");

  const card = document.createElement("div");
  card.className = "card";

  const cardTitle = document.createElement("h3");
  cardTitle.textContent = title;

  const cardContent = document.createElement("p");
  cardContent.textContent = content;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete-button";
  deleteButton.addEventListener("click", function () {
    cardContainer.removeChild(card);
  });

  card.append(cardTitle, cardContent, deleteButton);

  cardContainer.append(card);
}

/*9. Email Validator: Create a function that checks if a string contains a valid email 
pattern using string methods (no regex).*/

function isValidEmail(email) {
  const symbolIndex = email.indexOf("@");
  if (symbolIndex === -1) {
    return false;
  }

  if (symbolIndex === 0) {
    return false;
  }

  const dotIndex = email.indexOf(".", symbolIndex);
  if (dotIndex === -1) {
    return false;
  }

  if (dotIndex === email.length - 1) {
    return false;
  }

  if (dotIndex - symbolIndex <= 1) {
    return false;
  }

  return true;
}

const email1 = "email@email.com";
const email2 = "email.email@.com";

console.log(isValidEmail(email1));
console.log(isValidEmail(email2));

/*10. Array Transformation: Create a function that transforms an array of strings 
into an array of objects with a length property.*/

function transformArrayToObjects(strings) {
  return strings.map((str) => {
    return {
      length: str.length,
    };
  });
}

const stringArray = ["apple", "banana", "cherry", "date"];
const transformedArray = transformArrayToObjects(stringArray);

console.log(transformedArray);

/*11. Element Frequency Counter: Create a function that counts the frequency of 
elements in an array and returns an object with the counts. 
Example Input: ['a', 'b', 'a', 'c', 'b', ‘a'] 
Expected Output: { a: 3, b: 2, c: 1 } */

function countElementFrequency(arr) {
  const frequencyCounter = {};

  arr.forEach((element) => {
    if (frequencyCounter[element]) {
      frequencyCounter[element]++;
    } else {
      frequencyCounter[element] = 1;
    }
  });

  return frequencyCounter;
}

const inputArray = ["a", "b", "a", "c", "b", "a"];
const frequencyCount = countElementFrequency(inputArray);

console.log(frequencyCount);
