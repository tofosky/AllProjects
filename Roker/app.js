const game = () =>{
    let pScore = 0;
    let cScore = 0;

    const startGame = () =>{
        const playBtn = document.querySelector('.intro button')
        const introScreen = document.querySelector('.intro')
        const match = document.querySelector('.match')

        playBtn.addEventListener('click', () =>{
            introScreen.classList.add('fadeOut')
            match.classList.add('fadeIn')
        })
    }
    const playMatch = () =>{
        const options = document.querySelectorAll('.options button')
        const playerHands = document.querySelector('.player-hand')
        const computerHands = document.querySelector('.computer-hand')
        const hands = document.querySelectorAll('.hands img')
        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation = ''
            })
        })

        const computerOptions = ['rock', 'scissors', 'paper']
           options.forEach((option) => {
            option.addEventListener('click', function(){
                const computerNmber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNmber]
               
                setTimeout( () =>{
                    compareHands(this.textContent, computerChoice)
                //update image
                playerHands.src = `./assesets/${this.textContent}.jpg`
                computerHands.src = `./assesets/${computerChoice}.jpg`
                }, 2000)

                playerHands.style.animation = 'shakeplayer 2s ease'
                computerHands.style.animation = 'shakeComputer 2s ease'
            })
           })
        
        
    }

    const updateScore = () =>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) =>{
        const winner = document.querySelector('.winner')
        // checking for a tie
        if(playerChoice === computerChoice){
            winner.textContent = 'It is a tie';
            return;
        }
        //checking for a rock
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'player Wins';
                pScore++
                updateScore()
                return;
            }else{
                winner.textContent = 'computer Wins'
                cScore++
                updateScore()
                return;
            }
        }

         //checking for a paper
         if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'computer Wins';
                cScore++
                updateScore()
                return;
            }else{
                winner.textContent = 'player Wins'
                pScore++
                updateScore()
                return;
            }
        }

         //checking for a scissors
         if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'computer Wins';
                cScore++
                updateScore()
                return;
            }else{
                winner.textContent = 'player Wins'
                pScore++
                updateScore()
                return;
            }
        }
    }

    startGame()
    playMatch()
};

game()