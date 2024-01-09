var marks = prompt("Please Enter Your Marks ");

if ( marks >= 80 && marks <= 100) {
     console.log ("You Have got: A+");
} else if ( marks < 80 && marks >= 70 ) {
     console.log ("You Have got: A");
}else if ( marks <70 && marks >= 60) {
     console.log ("You Have got: B");
}else if ( marks <60 && marks >= 50) {
    console.log ("You Have got: C");
}else if ( marks <50 && marks >= 40) {
    console.log ("You Have got: D");
}else if ( marks <0 && marks >100 ) {
    console.log ("You are Fail");
} else {
    console.log("Invalid Input");
}