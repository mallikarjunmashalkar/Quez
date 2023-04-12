import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState("");
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");
 
  const data = [
    {
      id: 1,
      question: "What is Your Father Name ?",
      answers: [
        {
          text: "Mallikarjun",
          correct: false,
        },
        {
          text: "Rajkumar",
          correct: true,
        },
        {
          text: "Harish",
          correct: false,
        },
        {
          text: "Dinga",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "What is your Mother Name?",
      answers: [
        {
          text: "Yallamma",
          correct: false,
        },
        {
          text: "Kallamma",
          correct: false,
        },
        {
          text: "Mallamma",
          correct: true,
        },
        {
          text: "Sangamma",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Bheemashankar Yore From",
      answers: [
        {
          text: "Bengalore",
          correct: false,
        },
        
        {
          text: "Kalaburagi",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Bheemashanker Sister Name?",
      answers: [
        {
          text: "Laxmi",
          correct: true,
        },
        
        {
          text: "Soni",
          correct: false,
        },
        {
          text: "Ambika",
          correct: false,
        },
        {
          text: "Kallavva",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Bhimashanker Brother Name?",
      answers: [
        {
          text: "Huli",
          correct: false,
        },
        
        {
          text: "Mallikarjun",
          correct: false,
        },
        {
          text: "Prathamesh",
          correct: true,
        },
        {
          text: "Prakash",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Bheemashankar Which Bike are Used",
      answers: [
        {
          text: "Bicycle",
          correct: true,
        },
        
        {
          text: "Car",
          correct: false,
        },
        {
          text: "Buke",
          correct: false,
        },
        {
          text: "Bus",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Bhimashanker School Name?",
      answers: [
        {
          text: "NV School",
          correct: false,
        },
        
        {
          text: "Appa School",
          correct: false,
        },
        {
          text: "SSR School",
          correct: false,
        },
        {
          text: "SVPM School",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "Bheemashanker Which Medium?",
      answers: [
        {
          text: "Kannada",
          correct: false,
        },
        
        {
          text: "Urdu",
          correct: false,
        },
        {
          text: "English ",
          correct: true,
        },
        {
          text: "Frans",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Bheemashanker Friend Name?",
      answers: [
        {
          text: "Sashidhar",
          correct: true,
        },
        
        {
          text: "Sham",
          correct: false,
        },
        {
          text: "Veeresh",
          correct: false,
        },
        {
          text: "Kamal",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "How many type of Primitive data in java",
      answers: [
        {
          text: "5",
          correct: false,
        },
        
        {
          text: "7",
          correct: false,
        },
        {
          text: "6",
          correct: true,
        },
        {
          text: "8",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "How many type of memory are allocated by JVM",
      answers: [
        {
          text: "5",
          correct: true,
        },
        
        {
          text: "6",
          correct: false,
        },
        {
          text: "2",
          correct: false,
        },
        {
          text: "8",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "What is single tone class in Java?",
      answers: [
        {
          text: "Its Create one or more Instance",
          correct: false,
        },
        
        {
          text: "Its Create only Instance",
          correct: true,
        },
        {
          text: "Non of Above",
          correct: false,
        },
        {
          text: "Both A&B",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Which one is Not a Access Modifier?",
      answers: [
        {
          text: "Public",
          correct: false,
        },
        
        {
          text: "Private",
          correct: false,
        },
        {
          text: "Default",
          correct: false,
        },
        {
          text: "Defined",
          correct: true,
        },
      ],
    },
    {
      id: 14,
      question: "What are the Non permeative Typecasting in java",
      answers: [
        {
          text: "Up-Casting",
          correct: false,
        },
        
        {
          text: "Down-Casting",
          correct: false,
        },
        {
          text: "Both A&B",
          correct: true,
        },
        {
          text: "Non of This",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Which one is not a java Future",
      answers: [
        {
          text: "Platform dependent",
          correct: true,
        },
        
        {
          text: "Simple",
          correct: false,
        },
        {
          text: "Robust",
          correct: false,
        },
        {
          text: "Interpreted",
          correct: false,
        },
      ],
    },
    {
      question: "You Win",
      answers: [
        {
          text: "Platform dependent",
          correct: true,
        },
        
        {
          text: "Simple",
          correct: false,
        },
        {
          text: "Robust",
          correct: false,
        },
        {
          text: "Interpreted",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
        
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
