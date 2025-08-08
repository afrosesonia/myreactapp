
import { useState } from "react";
import Results from "./results";

function Quiz() {
    const questionBank = [
        {
            question: "Which is the largest continent by land area?",
            options: ["Africa", "North America", "Asia", "Antarctica"],
            answer: "Asia",
        },
        {
            question: "What is the smallest continent by land area?",
            options: ["Europe", "Australia", "South America", "Antarctica"],
            answer: "Australia",

        },
        {
            question: "Which continent is home to the Sahara Desert?",
            options: ["Asia", "Africa", "Australia", "North America"],
            answer: "Africa",

        },
        {
            question: "Which continent has the most countries?",
            options: ["Europe", "South America", "Asia", "Africa"],
            answer: "Africa",

        },
        {
            question: "The Amazon Rainforest is primarily located in which continent?",
            options: ["Africa", "South America", "Asia", "Antarctica", "Europe"],
            answer: "South America",

        },

    ];

    const initialAnswers = [null, null, null, null, null];
    const [userAnswers, setUserAnswers] = useState(initialAnswers);

    const [currentQuestion, setCurrentQuestion] = useState(0);


    const [isQuizFinished, setIsQuizFinished] = useState(false);
    const selectedAnswer = userAnswers[currentQuestion];

    function handleSelectOption(option) {
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = option;
        setUserAnswers(newUserAnswers);
    }

    function goToNext() {
        if (currentQuestion === questionBank.length - 1) {
            setIsQuizFinished(true);
        } else {
            setCurrentQuestion(currentQuestion + 1);
        }

    }

    function goToPrev() {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }

    }

    function restartQuiz() {

        setUserAnswers(initialAnswers);
        setCurrentQuestion(0);
        setIsQuizFinished(false);
    }

    function restartQuiz() {
        setUserAnswers(initialAnswers);
        setCurrentQuestion(0);
        setIsQuizFinished(false);
    }


    if (isQuizFinished) {

        return <Results questionBank={questionBank} userAnswers={userAnswers} restartQuiz={restartQuiz} />;
    }

    return (<div>
        <h2>Question {currentQuestion + 1}</h2>
        <p className="question">{questionBank[currentQuestion].question}</p>
        {questionBank[currentQuestion].options.map((option) => (
            <button className={"option" + (selectedAnswer === option ? " selected" : "")}
                onClick={() => handleSelectOption(option)}>{option}</button>
        ))}

        <div className="nav-buttons">
            <button onClick={goToPrev} disabled={currentQuestion === 0}>Previous</button>
            <button onClick={goToNext} disabled={!selectedAnswer}>
                {currentQuestion === questionBank.length - 1 ? "Finish Quiz" : "Next"}
            </button>

        </div>

    </div>);
}

export default Quiz;