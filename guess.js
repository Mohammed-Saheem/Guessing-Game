let n = prompt("Enter a number for outlier:");
let random = Math.floor(Math.random() * n + 1);

while (true) {
        let enter = prompt("Enter the number (or 'quit' to exit):");
        if (enter === 'quit') {
                console.log("You have quitted");
                break;
        } else if (parseInt(enter) === random) {
                console.log("You guessed it right!!!");
                break;

        }
        else if(enter<random){
                enter = prompt("Enter the number ,hint :its too small");
        }
        else if(enter>random){
                enter = prompt("Enter the number ,hint: its too bigg");
        }
        else {
                console.log("Try again!");
        }
}
