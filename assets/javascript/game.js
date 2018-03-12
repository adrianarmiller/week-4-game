$(document).ready(function() {
    
    let generatedNumber = Math.floor((Math.random() * 101) + 19);
    $('#number-to-match').text(generatedNumber);

   let wins = 0;
   let losses = 0;
   $('#wins').text(wins);
   $('#losses').text(losses); 

//    function createButtons(){
//        let buttonArray = [];
//        let goodToGo = false;
      
//        for(let i = 0; i <4; i++){
//            while(goodToGo === false){
//                 buttonArray[i] = Math.floor((Math.random() * 11) + 1);

//                 for(let n = 0; n<buttonArray.length; n++){
//                     if(buttonArray[i]==buttonArray[n]){
//                         goodToGo = false; //still is false

//                         //will iterate through each element that has been initialized for buttonArray
//                         //if an element has the same value of a previous element, the while loop will reiterate for buttonArray[i] to be reassigned until it does not equal any of previous elements
//                     }
//                     if(buttonArray[i]!=buttonArray[n] & i === n){
//                         goodToGo=true;
//                         //if buttonArray[i] does not have the same value as any previous element (i === n so we know each pre-existing element has been checked), the while loop will end and we move on to initialize a new element of the array
//                     }
//                 }             
//            } 
//        }

//        return buttonArray[];
//        this function will return an array so each element can be assigned to respective button
//    } this is meant to make sure each button has a different value. my logic for this started to confuse me so I've commented it out but I think it's on the right track
//    the purpose is for the checking/re-assigning process to happen while elements in array are being initialized

   let button1 = Math.floor((Math.random() * 11) + 1);
   let button2 = Math.floor((Math.random() * 11) + 1);
   let button3 = Math.floor((Math.random() * 11) + 1);
   let button4 = Math.floor((Math.random() * 11) + 1);

   let userScore = 0;
   $('#total-score').text(userScore);

   function win(){
       wins++;
       $('#wins').text(wins);
       newGame();

   }

   function lose(){
       losses++;
       $('#losses').text(losses); 
       newGame();
   }

   function newGame(){
        let generatedNumber = Math.floor((Math.random() * 101) + 19);
        $('#number-to-match').text(generatedNumber);

        userScore = 0;
        $('#total-score').text(userScore);


        let button1 = Math.floor((Math.random() * 11) + 1);
        let button2 = Math.floor((Math.random() * 11) + 1);
        let button3 = Math.floor((Math.random() * 11) + 1);
        let button4 = Math.floor((Math.random() * 11) + 1);

   }
   

   $("#button-1").click(function(){
       userScore += button1;
       $('#total-score').text(userScore);

       if(userScore === generatedNumber){
           win();
       }
       if(userScore>generatedNumber){
           lose();
       }

   });

   $("#button-2").click(function(){
        userScore += button2;
        $('#total-score').text(userScore);

        if(userScore === generatedNumber){
            win();
        }
        if(userScore>generatedNumber){
            lose();
        }
   });

   $("#button-3").click(function(){
        userScore += button3;
        $('#total-score').text(userScore);

        if(userScore === generatedNumber){
            win();
        }
        if(userScore>generatedNumber){
            lose();
        }

   });

   $("#button-4").click(function(){
        userScore += button4;
        $('#total-score').text(userScore);

        if(userScore === generatedNumber){
            win();
        }
        if(userScore>generatedNumber){
            lose();
        }

   });
    //random number between 19-120
    //each crystal between 1 and 12
});