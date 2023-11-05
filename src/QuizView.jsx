import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Include Bootstrap CSS

function QuizView(props) {
  //
  const { quiz } = props;
  // console.log(quiz);

  const liStyles = {
    padding: "10px",
    backgroundColor: "lightgray",
    transition: "background-color 0.3s",
  };

  const liHoverStyles = {
    backgroundColor: "darkgray",
  };

  const optionClicked = (isCorrect) => {
    console.log(isCorrect);
    if (isCorrect == true) {
      setScore(score + 1);
      console.log(score);
    } else {
      setWrong(wrong + 1);
      console.log(wrong);
    }
    if (currentQuestion + 1 < quiz.length) { //if 1<10, 2<10,.. 9<10 
      setCurrentQuestion(currentQuestion +1); // 2 ,3,.. 10
    } else {
      setAllanswered(true);
    }
  };

  const playAgain =()=>{
    setAllanswered(false)
    setCurrentQuestion(0)
    setScore(0)
    setWrong(0)

  }

  //console.log(score);
  //                <p>currrent score-{score}</p>

  const [score, setScore] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [allanswered, setAllanswered] = useState(true);

  return (
    <>
      {allanswered ? (
        <div className="results container-fluid">
          <div className="row d-flex flex-row justify-content-center">
            <div className="col-lg-6 mt-5 p-2 bg-dark">
              <h2 className="text-center text-primary fw-bold p-4">Results</h2>
              <h1  style={{ fontSize: "45px" }} className="text-primary  text-center">Score </h1>
              <h1
                style={{ fontSize: "55px",marginTop:"-10px" }}
                className="text-center  text-primary">
                {score}/{quiz.length}
              </h1>
              <div className=" d-flex justify-content-center mt-4 p-3">
                <h6 className="mx-2 text-primary">
                  Total Questions: {quiz.length}
                </h6>
                <h6 className="mx-2 text-success">Correct Answers : {score}</h6>
                <h6 className="mx-2 text-danger">Wrong Answers : {wrong} </h6>
              </div>
              <div className="div d-flex justify-content-center">
              
                <button onClick={playAgain} className="text-center mt-3 mb-3 btn btn-primary ">
                  Play Again
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container-fluid">
          <div className="row d-flex flex-row justify-content-center">
            <div className="col-lg-6 col-sm-6 col-md-6 text-start rounded py-4 bg-dark mt-5 ">
              <div className="mt-2 ">
                <h1 className="text-primary text-center py-3">Quiz App</h1>
                <div className=" mx-3 p-2 quiz-box">
                  <p className="text-primary">
                    Question {currentQuestion + 1} out of {quiz.length}
                  </p>
                  <h1 className="mb-4  text-primary px-2 py-2 fs-2">
                    {quiz[currentQuestion].question}
                  </h1>
                  <ul>
                    {quiz[currentQuestion].options.map((item, index) => {
                      return (
                        <li style={{ listStyle: "none" }}>
                          <button
                            style={liStyles}
                            onClick={() => optionClicked(item.isCorrect)}
                            key={index}
                            className="btn-outline-primary text-primary fw-bolder btn btn-black rounded pointer shadow p-2 fs-6  mb-3  bg-light w-50"
                          >
                            {item.answers}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default QuizView;
