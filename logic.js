// Access Control

let age = 31;
let hasTicket = true;

if (age >= 16 && hasTicket == true) {
    console.log("Access granted");
} else {
    console.log("Access denied")
}

// Score Evaluation

let scores = [12, 5, 16, 0, 8];

function hasPassed(grades) {
    for (let i = 0; i < scores.length; i++) {
        if (grades[i] >= 10) {
            console.log("Pass");
        } else {
            console.log("Fail");
        }
    }
}

hasPassed(scores);

// Score Average

function scoresAverage(grades) {
    let gradesSum = 0;
    for (let i = 0; i < grades.length; i++) {
        gradesSum += grades[i];
    }
    let average = gradesSum / grades.length;
    console.log("The average score is: " + average);
    if (average >= 10) {
        console.log("Pass");
    } else {
        console.log("Fail");
    }
}

scoresAverage(scores);

// Minimum Finder

let numArr = [12, 54, 8, 78, 102, 78, 5, 1];
let minNum = numArr[0];

for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] < minNum) {
        minNum = numArr[i];
    }
}
console.log("The lowest value is: " + minNum);

// Duplicate Detector

let frequency = {};

for (let num of numArr) {
    frequency[num] = (frequency[num] || 0) + 1;
}

let duplicate = false;

for (let elem in frequency) {
    if (frequency[elem] > 1) {
        duplicate = true;
        break;
    }
}

if (duplicate) {
    console.log("Duplicates found");
} else {
    console.log("All unique");
}

// Palindrome Check

let text = "azertyuiopoiuytreza";
let palindrome = true;

for (let i = 0; i < text.length / 2; i++) {
    if (text[i] !== text[text.length - (i + 1)]) {
        palindrome = false;
    }
}

if (palindrome) {
    console.log("Palindrome!");
} else {
    console.log("Not a palindrome");
}

// Array Sort

function partition(arr, low, high)
{

    let pivot = arr[high];

    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }

    swap(arr, i + 1, high);
    return i + 1;
}

function swap(arr, i, j)
{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function quickSort(arr, low, high)
{
    if (low < high) {

        let pi = partition(arr, low, high);

        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

let arr = [ 10, 67, 87, 12, 41, 0 ];
let n = arr.length;

quickSort(arr, 0, n - 1);
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] + " ");
}