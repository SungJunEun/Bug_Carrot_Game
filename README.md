# Bug&Carrot Game
***Simple click-based web game with JS***

---
## Summary
*Randomly displays bug and carrots in the field and if we click bug, game is over. If we click all the carrots in the field, we win.*

- Work with Web API (setInterval,scroll)
- Try refactoring and practice JS modules
- Project based on [Online Course from Dream Coding](https://academy.dream-coding.com/courses/browser101)

*from 2021.08.21 - 31.*

----

## Tech

I used..
- HTML
- CSS 
- Javascript 
- Replit

with Github.

## Key Features

-  ### Ramdom display
    - get coordinates of `field` element with `getBoundingCLientRect` method.
    - `getRandomArbitrary` function for generating random number.

    ![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/60536942/133957493-9dddc7af-0914-4ec9-a584-b9a889e72ca6.gif)



- ### Timer
    - `setInterval` for displaying decreasing number with every seconds.
    - `clearInterval` for resetting timer in following cases.
        1) number reaches to 0
        2) user clicks `bug` element
        3) user clicks all of the `carrot` elements

    

- ### Pop-up
    - create `FinishGameBanner` instance of `PopUp` class in **popup.js**
    - `show` method to show pop-up in following cases
        1. **YOU LOST!**
            - number reaches to 0 
            
                ![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/60536942/133957579-ec675c5d-677f-4894-ba0d-f9e30b9a603c.gif)

            - user clicks `bug` element
            
        2. **YOU WIN!**
            - user clicks all of the `carrot` elements
        

## Refactoring
- ###  Before
    - 1 js file (main.js)
    - functions unsorted
    - no use of class & instances
- ###  After
    - 3 js file (main.js,field.js,popup.js)
    - methods and properties are sorted in each modules
    - instances are made from field and popup classes
    



