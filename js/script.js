
//1 to 100

let i = 1;
const ul = document.querySelector('#numlist');

for (i; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        const li = document.createElement('li');
        li.innerHTML = 'FizzBuzz';
        ul.append(li);
    }

    else if (i % 3 == 0) {
        const li = document.createElement('li');
        li.innerHTML = 'Fizz';
        ul.append(li);
    }

    else if (i % 5 == 0) {
        const li = document.createElement('li');
        li.innerHTML = 'Buzz';
        ul.append(li);
    }
    
    else {
        const li = document.createElement('li');
        li.innerHTML = i;
        ul.append(li);
    }
};

