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
