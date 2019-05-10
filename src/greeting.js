const userName = prompt('What is your name?');

const verifyName = function verifyName(){
    if(userName === 'Q'){
        console.log('Yay!');
    }
    else{
        console.log('Aww!');
    }
};

verifyName();