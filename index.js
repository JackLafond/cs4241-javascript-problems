/**
 * To run switch the different problem calls on the window on load at the end,
 * example to test problem two set window.onload = problem2()
 */


// problem 1

class Artist {

    speak() {
        console.log("I am an artist")
    }

}

class Painter extends Artist {

    paint() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        document.body.style.background = color;
    }

} 

function problem1() {

    const a = new Artist;
    const p = new Painter;

    a.speak();
    p.paint();

}

// problem 2

function problem2() {

    function getRandColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    var mainDiv = document.getElementById("problem2");
    mainDiv.style.display = 'flex';

    for(let i = 0; i < 20; i++) {

        var newDiv = document.createElement("div");
        newDiv.style.display = 'flex';
        newDiv.style.width = '20px';
        newDiv.style.height = '20px';
        newDiv.style.backgroundColor = getRandColor();

        mainDiv.appendChild(newDiv);

    }

}

// problem 3 

function problem3() {

    var input = document.createElement("input");
    input.addEventListener('change', function(d) {
        var h1 = document.createElement("h1");
        h1.innerHTML = input.value;
        var mainDiv = document.getElementById("problem3");
        mainDiv.appendChild(h1);
        input.value = '';
    });

    var mainDiv = document.getElementById("problem3");
    mainDiv.appendChild(input);

}

// problem 4 

function makeBtn(count) {
    count = count + 1;
    var btn = document.createElement('button');
    btn.textContent = "Button" + count;
    btn.addEventListener('click', function(d) {
        document.getElementById("problem4").appendChild(makeBtn(count));
        btn.remove();
    });
    return btn;
}

function problem4() {
    var count = 0;
    document.getElementById("problem4").appendChild(makeBtn(count));
}

window.onload = problem4();

/**
 * Problem 1
 * We all used class and class extends to however the ways of getting different colors varied
 * 
 * Problem 2
 * We all used essentially the same for loop each creating a new div that had a random color. 
 * It varied in that I had an idex html with a denoted div already while others created it in the script
 * 
 * Problem 3
 * This was similar for all of us. We all used a function that craeted the input with an event listener that tagged the h1 onto the document
 * It varied in that I did not have an if statement checking for strings while they did, I assumed that numbers could still be strings
 * 
 * Problem 4
 * In this problem each of us used recursion to achieve the loop of event listeners to delete and add a new button
 * It varied in that mine and anothers counted up the buttons while one person used random text
 */

