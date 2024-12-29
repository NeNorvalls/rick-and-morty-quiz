# Rick and Morty Quiz App

This is a simple interactive quiz app built using HTML, CSS, and JavaScript. The app fetches questions dynamically from a `data.json` file and allows users to answer multiple-choice questions. Upon answering, the correct answer is revealed, and the user can proceed to the next question. It’s built to be responsive across devices.

## Features

- **Dynamic Question Loading**: Questions and answers are loaded from a JSON file using the `fetch` API.
- **Answer Validation**: Users' selected answers are checked and highlighted in green for correct answers and red for incorrect ones.
- **Responsive Design**: The app adjusts to different screen sizes using CSS media queries.

## File Structure

- **index.html**: The main HTML structure that displays the quiz.
- **styles.css**: Contains the styling for the quiz, including buttons, layout, and responsiveness.
- **script.js**: The JavaScript logic to handle loading questions, checking answers, and transitioning to the next question.
- **data.json**: Contains the quiz questions and answers.

## How It Works

1. **Question Loading**: The app loads questions from the `data.json` file using `fetch` and displays them on the page.
2. **Answer Checking**: When a user selects an answer, it’s checked against the correct one. The correct answer is displayed.
3. **Navigation**: After answering, users can click the "Next Question" button to move to the next question.

## JSON Structure

The questions are stored in a JSON file (`data.json`) in the following format:

```json
[
  {
    "question": "What is Rick's full name?",
    "answers": ["Rick Sanchez", "Rick Astley", "Rick Grimes", "Rick Roll"],
    "correctAnswer": 0
  },
  {
    "question": "Who is Morty's grandfather?",
    "answers": ["Rick Sanchez", "Jerry Smith", "Summer Smith", "Beth Smith"],
    "correctAnswer": 0
  }
]
```
