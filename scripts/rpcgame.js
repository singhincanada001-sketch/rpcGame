let userChoice;
            let computerChoice;
            let randomNumber;
           
            let result='';
            const score = JSON.parse(localStorage.getItem('score')) || {
            win: 0,
            lose: 0,
            tie: 0
            };
          
            updateScoreElement();
           


            function pickcomputerChoice(){
                
                randomNumber=Math.round(Math.random()*3);
                if(randomNumber==0)
                {
                computerChoice='Rock';
                }
                else if(randomNumber==1)
                {
                computerChoice='Paper';
                }
                else{
                computerChoice='Scissors';
            }
              console.log(computerChoice);
    }

        
  

     function decision(userChoice,computerChoice,){
     if(userChoice==computerChoice){
           result='Tie!'
        }else if(userChoice==='Rock'&& computerChoice==='Paper')//Or you can use nested if loop
        {
            result='You Loose!'
        }else if(userChoice==='Rock'&& computerChoice==='Scissors'){
           result='You Won!'
        }else if(userChoice==='Paper'&& computerChoice==='Scissors'){
            result='You Loose!'
        }else if(userChoice==='Paper'&& computerChoice==='Rock'){
           result='You Won!'
        }else if(userChoice==='Scissors'&& computerChoice==='Rock'){
            result='You Loose!'
        }else if(userChoice==='Scissors'&& computerChoice==='Paper'){
           result='You Won!'
        }
        if(result==='You Won!'){
        score.win++;
        }else if(result==='You Loose!'){
        score.lose++;
        }else{
        score.tie++;
        }

        localStorage.setItem('score', JSON.stringify(score));


        printMoves();

        updateScoreElement();
        

    }

    function updateScoreElement(){
        document.querySelector('.js-score').innerHTML=` Wins:${score.win}, Looses:${score.lose}, Ties:${score.tie}`;
    }

    function printMoves(){
        document.querySelector('.js-moves')
        .innerHTML=` ${result}<br><br>
        You <img class='move-img' src="photos/${userChoice}.png"></img>
        <img class='move-img' src="photos/${computerChoice}.png"></img>Computer
        `;
    }

    function resetScore(){
        score.win=0;
        score.lose=0;
        score.tie=0;
        localStorage.removeItem('score');
        updateScoreElement();
        document.querySelector('.js-moves')
        .innerHTML='';
    }
      console.log(localStorage.getItem('score'));
