let red = document.querySelector(".red");
let blue = document.querySelector(".blue");
let green = document.querySelector(".green");
let yellow = document.querySelector(".yellow");
let wild = document.querySelector(".wild");
let one = document.querySelector(".one");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let ten = document.querySelector(".ten");
let hash = document.querySelector(".hash");
let numButtons = document.querySelector(".numButtons");
let r1Tally = document.querySelector(".r1Tally");
let r3Tally = document.querySelector(".r3Tally");
let r4Tally = document.querySelector(".r4Tally");
let r5Tally = document.querySelector(".r5Tally");
let r6Tally = document.querySelector(".r6Tally");
let r7Tally = document.querySelector(".r7Tally");
let r8Tally = document.querySelector(".r8Tally");
let r9Tally = document.querySelector(".r9Tally");
let r10Tally = document.querySelector(".r10Tally");
let rHashTally = document.querySelector(".rHashTally");
let b1Tally = document.querySelector(".b1Tally");
let b3Tally = document.querySelector(".b3Tally");
let b4Tally = document.querySelector(".b4Tally");
let b5Tally = document.querySelector(".b5Tally");
let b6Tally = document.querySelector(".b6Tally");
let b7Tally = document.querySelector(".b7Tally");
let b8Tally = document.querySelector(".b8Tally");
let b9Tally = document.querySelector(".b9Tally");
let b10Tally = document.querySelector(".b10Tally");
let bHashTally = document.querySelector(".bHashTally");
let g1Tally = document.querySelector(".g1Tally");
let g3Tally = document.querySelector(".g3Tally");
let g4Tally = document.querySelector(".g4Tally");
let g5Tally = document.querySelector(".g5Tally");
let g6Tally = document.querySelector(".g6Tally");
let g7Tally = document.querySelector(".g7Tally");
let g8Tally = document.querySelector(".g8Tally");
let g9Tally = document.querySelector(".g9Tally");
let g10Tally = document.querySelector(".g10Tally");
let gHashTally = document.querySelector(".gHashTally");
let y1Tally = document.querySelector(".y1Tally");
let y3Tally = document.querySelector(".y3Tally");
let y4Tally = document.querySelector(".y4Tally");
let y5Tally = document.querySelector(".y5Tally");
let y6Tally = document.querySelector(".y6Tally");
let y7Tally = document.querySelector(".y7Tally");
let y8Tally = document.querySelector(".y8Tally");
let y9Tally = document.querySelector(".y9Tally");
let y10Tally = document.querySelector(".y10Tally");
let yHashTally = document.querySelector(".yHashTally");
let w2Tally = document.querySelector(".w2Tally");
let close = document.querySelector(".close");


console.log(red);
console.log(numButtons);
console.log(wild);


// variables
let color;

let buttonCount=0;
let r1=0;
let r3=0;
let r4=0;
let r5=0;
let r6=0;
let r7=0;
let r8=0;
let r9=0;
let r10=0;
let rHash=0;
let b1=0;
let b3=0;
let b4=0;
let b5=0;
let b6=0;
let b7=0;
let b8=0;
let b9=0;
let b10=0;
let bHash=0;
let g1=0;
let g3=0;
let g4=0;
let g5=0;
let g6=0;
let g7=0;
let g8=0;
let g9=0;
let g10=0;
let gHash=0;
let y1=0;
let y3=0;
let y4=0;
let y5=0;
let y6=0;
let y7=0;
let y8=0;
let y9=0;
let y10=0;
let yHash=0;
let w2=0;

//Update Functions

function updateR1Tally() {
    r1Tally.innerHTML = r1;
}
function updateR3Tally() {
    r3Tally.innerHTML = r3;
}
function updateR4Tally() {
    r4Tally.innerHTML = r4;
}
function updateR5Tally() {
    r5Tally.innerHTML = r5;
}
function updateR6Tally() {
    r6Tally.innerHTML = r6;
}
function updateR7Tally() {
    r7Tally.innerHTML = r7;
}
function updateR8Tally() {
    r8Tally.innerHTML = r8;
}
function updateR9Tally() {
    r9Tally.innerHTML = r9;
}
function updateR10Tally() {
    r10Tally.innerHTML = r10;
}
function updateRHashTally() {
    rHashTally.innerHTML = rHash;
}

function updateB1Tally() {
    b1Tally.innerHTML = b1;
}
function updateB3Tally() {
    b3Tally.innerHTML = b3;
}
function updateB4Tally() {
    b4Tally.innerHTML = b4;
}
function updateB5Tally() {
    b5Tally.innerHTML = b5;
}
function updateB6Tally() {
    b6Tally.innerHTML = b6;
}
function updateB7Tally() {
    b7Tally.innerHTML = b7;
}
function updateB8Tally() {
    b8Tally.innerHTML = b8;
}
function updateB9Tally() {
    b9Tally.innerHTML = b9;
}
function updateB10Tally() {
    b10Tally.innerHTML = b10;
}
function updateBHashTally() {
    bHashTally.innerHTML = bHash;
}

function updateG1Tally() {
    g1Tally.innerHTML = g1;
}
function updateG3Tally() {
    g3Tally.innerHTML = g3;
}
function updateG4Tally() {
    g4Tally.innerHTML = g4;
}
function updateG5Tally() {
    g5Tally.innerHTML = g5;
}
function updateG6Tally() {
    g6Tally.innerHTML = g6;
}
function updateG7Tally() {
    g7Tally.innerHTML = g7;
}
function updateG8Tally() {
    g8Tally.innerHTML = g8;
}
function updateG9Tally() {
    g9Tally.innerHTML = g9;
}
function updateG10Tally() {
    g10Tally.innerHTML = g10;
}
function updateGHashTally() {
    gHashTally.innerHTML = gHash;
}

function updateY1Tally() {
    y1Tally.innerHTML = y1;
}
function updateY3Tally() {
    y3Tally.innerHTML = y3;
}
function updateY4Tally() {
    y4Tally.innerHTML = y4;
}
function updateY5Tally() {
    y5Tally.innerHTML = y5;
}
function updateY6Tally() {
    y6Tally.innerHTML = y6;
}
function updateY7Tally() {
    y7Tally.innerHTML = y7;
}
function updateY8Tally() {
    y8Tally.innerHTML = y8;
}
function updateY9Tally() {
    y9Tally.innerHTML = y9;
}
function updateY10Tally() {
    y10Tally.innerHTML = y10;
}
function updateYHashTally() {
    yHashTally.innerHTML = yHash;
}
function updateW2Tally() {
    w2Tally.innerHTML = w2;
}



window.onload = function() {
    updateR1Tally();
    updateR3Tally();
    updateR4Tally();
    updateR5Tally();
    updateR6Tally();
    updateR7Tally();
    updateR8Tally();
    updateR9Tally();
    updateR10Tally();
    updateRHashTally();
    updateB1Tally();
    updateB3Tally();
    updateB4Tally();
    updateB5Tally();
    updateB6Tally();
    updateB7Tally();
    updateB8Tally();
    updateB9Tally();
    updateB10Tally();
    updateBHashTally();
    updateG1Tally();
    updateG3Tally();
    updateG4Tally();
    updateG5Tally();
    updateG6Tally();
    updateG7Tally();
    updateG8Tally();
    updateG9Tally();
    updateG10Tally();
    updateGHashTally();
    updateY1Tally();
    updateY3Tally();
    updateY4Tally();
    updateY5Tally();
    updateY6Tally();
    updateY7Tally();
    updateY8Tally();
    updateY9Tally();
    updateY10Tally();
    updateYHashTally();
    updateW2Tally();
   
};

//click on color buttons

red.addEventListener('click', () =>{
    if(buttonCount==0){
    color="red";
    numButtons.style.visibility="visible";
    buttonCount=1;
    }

})

blue.addEventListener('click', () =>{
    if(buttonCount==0){
    color="blue";
    numButtons.style.visibility="visible";
    buttonCount=1;
    }

})

green.addEventListener('click', () =>{
    if(buttonCount==0){
    color="green";
    numButtons.style.visibility="visible";
    buttonCount=1;
    }

})

yellow.addEventListener('click', () =>{
    if(buttonCount==0){
    color="yellow";
    numButtons.style.visibility="visible";
    buttonCount=1;
    }

})

wild.addEventListener('click', () =>{
    if(buttonCount==0){
        buttonCount=1;
        console.log('clicked w2');
        w2++;
        updateW2Tally();
        setTimeout(() => {
            buttonCount=0;   
        }, 1200);
       
    }
})

//click on number buttons

one.addEventListener('click', () =>{
    if(buttonCount==1){
        buttonCount=0;
        numButtons.style.visibility="hidden";
        switch (color){
            case "red":
                r1++;
                updateR1Tally();
            break;
            case "blue":
                b1++;
                updateB1Tally();
            break;
            case "green":
                g1++;
                updateG1Tally();
            break;
            case "yellow":
                y1++;
                updateY1Tally();
            break;
            
        }
    
    }

})

three.addEventListener('click', () =>{
    if(buttonCount==1){
        buttonCount=0;
        numButtons.style.visibility="hidden";
        switch (color){
            case "red":
                r3++;
                updateR3Tally();
                
            break;
            case "blue":
                b3++;
                updateB3Tally();
            break;
            case "green":
                g3++;
                updateG3Tally();
            break;
            case "yellow":
                y3++;
                updateY3Tally();
            break;
            
        }
    
    }

})

four.addEventListener('click', () =>{
    if(buttonCount==1){
        buttonCount=0;
        numButtons.style.visibility="hidden";
        switch (color){
            case "red":
                r4++;
                updateR4Tally();
            break;
            case "blue":
                b4++;
                updateB4Tally();
            break;
            case "green":
                g4++;
                updateG4Tally();
            break;
            case "yellow":
                y4++;
                updateY4Tally();
            break;
            
        }
    
    }

})

five.addEventListener('click', () =>{
    if(buttonCount==1){
        buttonCount=0;
        numButtons.style.visibility="hidden";
        switch (color){
            case "red":
                r5++;
                updateR5Tally();
            break;
            case "blue":
                b5++;
                updateB5Tally();
            break;
            case "green":
                g5++;
                updateG5Tally();
            break;
            case "yellow":
                y5++;
                updateY5Tally();
            break;
            
        }
    
    }

})

six.addEventListener('click', () =>{
    if(buttonCount==1){
        buttonCount=0;
        numButtons.style.visibility="hidden";
        switch (color){
            case "red":
                r6++;
                updateR6Tally();
            break;
            case "blue":
                b6++;
                updateB6Tally();
            break;
            case "green":
                g6++;
                updateG6Tally();
            break;
            case "yellow":
                y6++;
                updateY6Tally();
            break;
            
        }
    
    }

})

seven.addEventListener('click', () =>{
    if(buttonCount==1){
        buttonCount=0;
        numButtons.style.visibility="hidden";
        switch (color){
            case "red":
                r7++;
                updateR7Tally();
            break;
            case "blue":
                b7++;
                updateB7Tally();
            break;
            case "green":
                g7++;
                updateG7Tally();
            break;
            case "yellow":
                y7++;
                updateY7Tally();
            break;
            
        }
    
    }

})

eight.addEventListener('click', () =>{
    if(buttonCount==1){
        buttonCount=0;
        numButtons.style.visibility="hidden";
        switch (color){
            case "red":
                r8++;
                updateR8Tally();
            break;
            case "blue":
                b8++;
                updateB8Tally();
            break;
            case "green":
                g8++;
                updateG8Tally();
            break;
            case "yellow":
                y8++;
                updateY8Tally();
            break;
            
        }
    
    }

})

nine.addEventListener('click', () =>{
    if(buttonCount==1){
        buttonCount=0;
        numButtons.style.visibility="hidden";
        switch (color){
            case "red":
                r9++;
                updateR9Tally();
            break;
            case "blue":
                b9++;
                updateB9Tally();
            break;
            case "green":
                g9++;
                updateG9Tally();
            break;
            case "yellow":
                y9++;
                updateY9Tally();
            break;
            
        }
    
    }

})

ten.addEventListener('click', () =>{
    if(buttonCount==1){
        buttonCount=0;
        numButtons.style.visibility="hidden";
        switch (color){
            case "red":
                r10++;
                updateR10Tally();
            break;
            case "blue":
                b10++;
                updateB10Tally();
            break;
            case "green":
                g10++;
                updateG10Tally();
            break;
            case "yellow":
                y10++;
                updateY10Tally();
            break;
            
        }
    
    }

})

hash.addEventListener('click', () =>{
    if(buttonCount==1){
        buttonCount=0;
        numButtons.style.visibility="hidden";
        switch (color){
            case "red":
                rHash++;
                updateRHashTally();
            break;
            case "blue":
                bHash++;
                updateBHashTally();
            break;
            case "green":
                gHash++;
                updateGHashTally();
            break;
            case "yellow":
                yHash++;
                updateYHashTally();
            break;
            
        }
    
    }

})

close.addEventListener('click', () =>{
    numButtons.style.visibility="hidden";
    buttonCount=0;
})


