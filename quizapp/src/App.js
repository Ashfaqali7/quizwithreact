import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: '“IP” is an abbreviation of',
			answerOptions: [
				{ answerText: 'Internet Process', isCorrect: false },
				{ answerText: 'Internet Program', isCorrect: false },
				{ answerText: 'Internet Protocol', isCorrect: true },
				{ answerText: 'Internet Port', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following is an internet standard communication protocol for email transmission?',
			answerOptions: [
				{ answerText: 'SSH', isCorrect: false },
				{ answerText: 'SMTP', isCorrect: true },
				{ answerText: 'HRT', isCorrect: false },
				{ answerText: 'STP', isCorrect: false },
			],
		},
		{
			questionText: ' What component manages the data flow and interaction between the components of a computer processor?',
			answerOptions: [
				{ answerText: 'Control unit', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Register', isCorrect: false },
				{ answerText: 'Monitor', isCorrect: false },
			],
		},
		{
			questionText: 'Web pages are interlinked by using',
      answerOptions: [
				{ answerText: 'hyperlinks', isCorrect: true },
				{ answerText: 'HTTP', isCorrect: false },
				{ answerText: 'HTTPS', isCorrect: false },
				{ answerText: 'Internet', isCorrect: false },
			],
		},
	];
 
 
  
   const [currentQustion , setcurrentQustion] = useState(0);
   const [score, setscore] = useState(false);
   const [count, setcount] = useState(0);

   const onclickfunction = (isCorrect) => {

	     if(isCorrect == true){
			 setcount(count + 1)
		 }
		const nextQution = currentQustion + 1;
		if (nextQution < questions.length) {
			setcurrentQustion(nextQution);
		}
		else {
			
			setscore(true);
		}

	}
	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{score? (
				<div className='score-section'>You scored {count} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section '>
						<div className='question-count'>
							<span>Question {currentQustion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQustion].questionText}</div>
					</div>
					<div className='answer-section '>
					{questions[currentQustion].answerOptions.map((answerOptions)=> 
					<button onClick={() => onclickfunction(answerOptions.isCorrect) }>{answerOptions.answerText}</button>)}
					</div>
				</>
			)}
		</div>
	);
}