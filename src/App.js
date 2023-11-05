import { useState } from "react";
import React from "react";
import "./App.css";
import QuizView from "./QuizView";
function App() {
  // question array goes here
  // [finalresult,setFinalresult]=useState(true)

  const quiz = [
    {
      question: "Choose the correct HTML element for the largest heading:",
      options: [
        { answers: "<h1>", isCorrect: true },
        { answers: "<h6>", isCorrect: false },
        { answers: "<heading>", isCorrect: false },
        { answers: "<head>", isCorrect: false },
      ],
    },
    {
      question:
        "Which of the following is not a comparison operator in JavaScript?",
      options: [
        { answers: "==", isCorrect: false },
        { answers: " ===", isCorrect: false },
        { answers: " !=", isCorrect: false },
        { answers: " =<", isCorrect: true },
      ],
    },
    {
      question: "What does the “NaN” value represent in JavaScript?",
      options: [
        { answers: "Not a number", isCorrect: true },
        { answers: " Null value", isCorrect: false },
        { answers: " Undefined value", isCorrect: false },
        { answers: " Boolean value", isCorrect: false },
      ],
    },
    {
      question: "What is the correct way to declare a variable in JavaScript??",
      options: [
        { answers: "var x = 5;", isCorrect: false },
        { answers: "variable x = 5;", isCorrect: false },
        { answers: " x = 5;", isCorrect: false },
        { answers: "let x = 5;", isCorrect: true },
      ],
    },
    {
      question:
        "What is the output of the following code:  - console.log(2 ** 3);?",
      options: [
        { answers: "5", isCorrect: false },
        { answers: "6;", isCorrect: false },
        { answers: "9;", isCorrect: false },
        { answers: "8", isCorrect: true },
      ],
    },
    {
      question: "What is the correct syntax for a “for” loop in JavaScript?",
      options: [
        { answers: "for (var i = 0; i < 5; i++)", isCorrect: true },
        { answers: "for (i = 0; i < 5; i++)", isCorrect: false },
        { answers: " for (var i = 5; i > 0; i–)", isCorrect: false },
        { answers: "for (i = 5; i > 0; i–)", isCorrect: false },
      ],
    },
    {
      question:
        "What is the output of the following code: - console.log(Math.random());",
      options: [
        { answers: "0", isCorrect: false },
        { answers: "0.5", isCorrect: false },
        { answers: "1", isCorrect: false },
        { answers: "A random number between 0 and 1", isCorrect: true },
      ],
    },
    {
      question: "How can you make a numbered list?",
      options: [
        { answers: "<dl>", isCorrect: false },
        { answers: "<ol>", isCorrect: true },
        { answers: "<list>", isCorrect: false },
        { answers: "<ul>", isCorrect: false },
      ],
    },
    {
      question:
        "Which of the following is not a valid way to create a JavaScript array?",
      options: [
        { answers: " var arr = [];", isCorrect: false },
        { answers: " var arr = new Array();", isCorrect: false },
        { answers: "var arr = Array();", isCorrect: false },
        { answers: "var arr = {1, 2, 3};", isCorrect: true },
      ],
    },
    {
      question:
        "Which of the following is not a valid way to create a JavaScript array?",
      options: [
        { answers: " var arr = [];", isCorrect: false },
        { answers: " var arr = new Array();", isCorrect: false },
        { answers: "var arr = Array();", isCorrect: false },
        { answers: "var arr = {1, 2, 3};", isCorrect: true },
      ],
    },
  ];

  return (
    <>
    <QuizView quiz={quiz} />
    </>
  );
}

export default App;
