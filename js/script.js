
//1 to 100

let i = 1;
const ul = document.querySelector('#numlist');

for (i; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        const li = document.createElement('button');
        li.innerHTML = 'FizzBuzz';
        ul.append(li);
        li.className += 'bgblue';
    }

    else if (i % 3 == 0) {
        const li = document.createElement('button');
        li.innerHTML = 'Fizz';
        ul.append(li);
        li.className += 'bgorange';
    }

    else if (i % 5 == 0) {
        const li = document.createElement('button');
        li.innerHTML = 'Buzz';
        ul.append(li);
        li.className += 'bgyellow';
    }
    
    else {
        const li = document.createElement('button');
        li.innerHTML = i;
        ul.append(li);
        li.className += 'bglightblue';
    }
};

let buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(){
        alert('bravo!')
    });
}