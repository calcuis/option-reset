## option-reset
**Reset the selected option (unselect)**

This TypeScript code appears to be a simple quiz application that allows users to pick a random question and select an answer choice.

AND **reset the selected ratio** option after clicking on the `Randomize` button (this appears to be the main focus of the task).

State Initialization:

`data`: An empty array that likely represents the collection of quiz questions. It seems to be intended to hold question objects, but it's initialized as an empty array.

`item`: A state variable that holds the currently selected question. It's initialized with an empty array using the useState hook. This initialization is likely incorrect; it should probably be initialized as null or with a default question object.

`swap`: A state variable that holds a numeric value (presumably intended for something like a swap `status`). It's initialized with 0 using the useState hook.

`values`: A state variable that holds the user's selected answer choice for the current question. It's initialized with an object containing a choice property set to an empty string. This is used to track the selected answer choice.

`pickItem` Function:
This asynchronous function is intended to be called when the user wants to pick a random question. It:

Randomly selects a question from the data array.
Calls `setValues` to reset the values state to the initial state (with an empty choice).

`initialValues` Object:
This object defines the structure of the initial values state. In this case, it only contains a choice property initialized with an empty string.

Input Change Handling (`handleInputChange`):
This function is used to update the values state when the user selects an answer choice using radio buttons.

It's triggered by the onChange event of the surrounding div element. It updates the values state to include the selected answer choice.

The returned JSX defines the visual representation of the component:

A `Randomize` button that, when clicked, triggers the `pickItem` function to randomly select a question.

A `div` element that contains an unordered list (`ul`) of answer choices.

Each answer choice is represented as an `li` element, with an associated `radio` button input.

If the answer choice matches the correct answer (item.ans), a checkmark ("✔️") is displayed next to it.
