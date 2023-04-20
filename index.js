function transform(inputString) {
    let a = " ";

    for (let i = 0; i < inputString.length; i++) {
        let char = inputString.charAt(i);


        a += char.toUpperCase();


        for (let j = 0; j <= i; j++) {
            a += char.toLowerCase();
        }


        if (i != inputString.length - 1) {
            a += "-";
        }
    }

    return a;
}

let a = prompt("enter")
console.log(transform(a));
