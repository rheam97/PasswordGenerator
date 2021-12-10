# Password Generator
Generates randomized passwords based on length and criteria UIs.

# Table of Contents
* [Project Description](#desc)
* [How I Made It](#process)
* [Usage](#usage)
* [URL](#URL)

<a name= "desc"></a>
## 03 Password Generator

This week’s Challenge requires you to create an application that an employee can use to generate a random password based on criteria they’ve selected. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes. This week’s coursework will teach you all the skills you need to succeed in this assignment.
The password can include special characters.

<a name="process"> </a>
## How I Made It

I first created the arrays that hold the criterion values. Then, I generated randomized string values from the arrays using math.floor(math.random()). I launched the function starting with a length prompt that was converted to a number to be used later to determine the length of the password. Once the length prompt criteria are satisfied, there are a series of confirmation questions asking the user to input their criteria preferences. I pushed the randomized string values into the generated password in the confirmations as they were executed. I then converted the password into another array and finally into a string, which is displyed in the textarea on the page. 


<a name= "usage"></a>
## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

```
<a name= "URL"></a>
## URL
Deployed: https://rheam97.github.io/PasswordGenerator/
Repo Link:https://github.com/rheam97/PasswordGenerator.git

