let popped = 0;
let score=0;
let colorcheck="red"
let tempclassname;
let life=3;
let selectColorTotal=0;
for(let i=0;i<=document.getElementById("balloon-gallere").childElementCount;i++)
{
    var c = document.getElementById("balloon-gallere").children;
if($(c[i]).css('color')==='red')
{
    selectColorTotal+=1
}
}

console.log(selectColorTotal)
console.log(document.getElementById("balloon-gallere").childElementCount)
document.addEventListener('mouseover', function(e){

    if (e.target.className === "balloon" && !(e.target.textContent === "POP!")){

tempclassname= $(e.target).css('color');
console.log(tempclassname)        


        if(tempclassname === 'red')
        {
                e.target.style.backgroundColor = "#green";
                e.target.textContent = "POP!";
                popped++;
                score+=10;
                removeEvent(e);
                console.log(popped);
                console.log(score);
                checkAllPopped();
                win();
    }
    else
    {
        console.log("not satisfy if inner condition")
        e.target.style.backgroundColor = "black";
        e.target.textContent = "POP!";
        removeEvent(e);
        console.log(popped);
        console.log(score);
        life-=1;
        checkAllPopped();
        win();
}

}   
});

function removeEvent(e){
    e.target.removeEventListener('mouseover', function(){
        
    })
};

function checkAllPopped(){
    if (life <= 0){
        console.log('Game Over!');
        document.getElementById('score').innerHTML="Score: "+score;
        let gallery = document.querySelector('#balloon-gallere');
        let message = document.querySelector('#yaya-no-balloons');
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
};
function win(){
    if (selectColorTotal == popped){
        console.log('Win!');
        document.getElementById('scorewin').innerHTML="Score: "+score;
        let gallery = document.querySelector('#balloon-gallere');
        let message = document.querySelector('#win-no-balloons');
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
};