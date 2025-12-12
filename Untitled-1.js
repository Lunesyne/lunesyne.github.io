// String: text — "hello"
// Number: numeric — 42 or 3.14
// Boolean: true/false
// Null: explicit "no value"
// Undefined: variable declared but not set
// Object: composite (arrays, plain objects)

let s = "text";
let n = 10;
let t = true;
let nothing = null;
let notSet;
let obj = {x:1};

// Use let for mutable variables, const for constants; avoid var
// Naming: camelCase (e.g., userName), start with letter/_, not number

const siteName = "Example";
let userName = "Stranger";

// Combine strings using + or template literals

let greeting = "Hello, " + userName + "!";
let tpl = 'Hello, ${userName}!'; // Preferred

// Use .length to retrieve string length/number of characters

console.log(s.length); // 4

// Use .slice to extract part of a string (.slice(start,end) or substring)

s.slice(0,2);
s.slice(2);

// Changing casing .toUpperCase()/.toLowerCase()

"hello".toUpperCase(); // "HELLO"
"Hi".toLowerCase(); // "hi"

// Basic arithmetic and modulo

let a = 7;
let b = 3;
a + b; // 10
a - b; // 4
a % b; // 1 (remainder)

// Increment and decrement

let i = 0;
i++; // i = 1
i--; // i = 0
// Prefir (++i) vs postfix (i++) differ when used inide expressions

// Creating and calling functions

function greet(name) {
    return "Hello, " + name.toLowerCase();
}
let wlmsg = greet(userName); // Call
function showGreetingOld() {
    alert(greet(userName));
}

function showGreeting() {
    const t = document.createElement('div');
    const main = document.createElement('div');
    const sub = document.createElement('div');
    const buttonRow = document.createElement('div');
    const buttonYes = document.createElement('button');
    const buttonNo = document.createElement('button');
    const weaklingsDie = document.createElement('img');
    main.textContent = 'Welcome, ' + userName.toLowerCase();
    sub.textContent = 'Would you like to see what this website has to offer?';
    sub.style.paddingTop = '5rem';
    buttonYes.textContent = 'Ye';
    buttonNo.textContent = "I can't stand its grandiosity :{";
    [buttonYes, buttonNo].forEach(b => {
        b.style.padding = '0.5rem 1rem';
        b.style.fontSize = '1rem';
        b.style.cursor = 'pointer';
        b.style.margin = '0 8rem';
        b.style.marginTop = '3rem';
    })
    t.appendChild(main);
    t.appendChild(sub);
    buttonRow.appendChild(buttonYes);
    buttonRow.appendChild(buttonNo);
    t.appendChild(buttonRow);
    t.style.cssText = [
        'position: fixed',
        'text-align: center',
        'background-color: rgb(0,0,0)',
        'width: 100%',
        'height: 100%',
        'font-size: 4ch',
        'display: flex',
        'flex-direction: column',
        'align-items: center',
        'justify-content: center',
        'top: 0rem',
        'color: violet',
        'opacity: 0',
        'z-index: 9999',
        'transition: opacity 2s ease',
    ].join(';');
    document.body.appendChild(t);
    requestAnimationFrame(() => t.style.opacity = '1');

    function removeGreeting() {
        t.style.opacity ='0';
        t.remove();
        document.removeEventListener('keydown', lameClosing);
    }

    function fakeremoveGreeting() {
        alert('There is no "Escape"... Heh. Good joke.')
    }

    function lameClosing(abc) {
        if (abc.key === 'Escape') fakeremoveGreeting();
    }

    weaklingsDie.src = 'WeaklingsDieBigDeal.png';

    // t.innerHTML = '';
    // This approach is simple, but might not be suitable for 
    // high-performance applications because it invokes the browser's 
    // HTML parser (though browsers may optimize for the case where the 
    // value is an empty string).

    // t.textContent = '';
    // As above, but use .textContent. According to MDN this will be 
    // faster than innerHTML as browsers won't invoke their HTML parsers 
    // and will instead immediately replace all children of the element 
    // with a single #text node.

    // while (t.lastElementChild) {
    //  t.removeChild(t.lastElementChild);
    // }
    // This approach preserves all non-Element (namely #text nodes and 
    // <!-- comments --> ) children of the parent (but not their 
    // descendants) - and this may be desirable in your application 
    // (e.g. some templating systems that use inline HTML comments to 
    // store template instructions).

    function closeTab() {
        while (t.firstChild) {
            t.removeChild(t.lastChild);
        }
        t.appendChild(weaklingsDie);
        setTimeout(function closeTab2() {
        try {
            window.close();
            setTimeout(() => {
                if (!window.closed) window.location.href = 'about:blank';
            }, 250);
    } catch(err) {
        window.location.href = 'about:blank';
    }
    }, 2500)
}

    document.addEventListener('keydown', lameClosing);

    buttonYes.addEventListener('click', removeGreeting);
    buttonNo.addEventListener('click', closeTab);
}

// Parameters and arguments
// Parameters are names in the definition (function greet(name), ...);
// Arguments are values you pass (greet("Sam"), ...)

function sum(a,b) {
    console.log("adding", a, b);
    return a + b;
}

let total = sum(2,3);

// Note: document.readyState is set to "interactive" after the completion 
// of the HTML parser but before the execution of scripts with defer or 
// type="module". DOMContentLoaded is fired after the execution of these 
// scripts, but before the execution of scripts with async. 
// document.readyState is set to "complete" after the execution of async 
// scripts. This means that during the execution of deferred and module 
// scripts, document.readyState is "interactive" but it's still possible 
// to attach DOMContentLoaded listeners and make them fire as usual. In 
// practice, executing doSomething() a little earlier is fine unless it 
// relies on some global state set up by other deferred/module scripts.

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", showGreeting);
    } else {
        showGreeting();
    };

function showQuickNotif(text, ms = 3000) {
    const t = document.createElement('div');
    const main = document.createElement('span');
    const sub = document.createElement('span');
    main.textContent = 'You! Intruder! You are not welcome here!';
    sub.textContent = '(Welcome :))';
    sub.style.paddingTop = '5rem';
    t.appendChild(main);
    t.appendChild(sub);
    t.style.cssText = [
        'position: fixed',
        'text-align: center',
        'background-color: rgb(0,0,0)',
        'width: 50vw',
        'height: 50vh',
        'font-size: 4ch',
        'display: flex',
        'flex-direction: column',
        'align-items: center',
        'padding: 1rem',
        'justify-content: center',
        'left: 50%',
        'top: 15rem',
        'transform: translateX(-50%)',
        'color: violet',
        'opacity: 0',
        'z-index: 9999',
        'transition: opacity .2s ease',
    ].join(';');
    document.body.appendChild(t);
    requestAnimationFrame(() => t.style.opacity = '1');
    setTimeout(()=> {
        t.style.opacity = '0';
        setTimeout(()=> t.remove(), 200);
    }, ms);
}





const box = document.querySelector('.lists-1-2');
const secret = document.querySelector('.secrettext');

function isSecretInside(innerRect, outerRect) {
    return (
    innerRect.left >= outerRect.left
    );
}

function checkSecret() {
    const secretRect = secret.getBoundingClientRect();
    const boxRect = box.getBoundingClientRect();
    if (isSecretInside(secretRect, boxRect)) {
        secret.classList.add('visible');
    } else {
        secret.classList.remove('visible');
    }
}

const ro = new ResizeObserver(checkSecret);
ro.observe(box);

window.addEventListener('resize', checkSecret);

checkSecret();





document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('saveFormtxt');
    const textarea = document.getElementById('content');
    if (!form || !textarea) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop form posting to server

        const text = textarea.value;
        const filename = `DoidoFalandoSozinhokkkkk.txt`;

        const blob = new Blob([text], {type: 'text/plain;charset=utf-8'});
        const url = URL.createObjectURL(blob);

        const z = document.createElement('a');
        z.href = url;
        z.download = filename;
        document.body.appendChild(z);
        z.click();

        document.body.removeChild(z);
        URL.revokeObjectURL(url);
    });
});