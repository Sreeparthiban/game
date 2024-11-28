

// (

//     function(){
//         function question (question,answer,option) {
//             this.question=question;
//             this.answer=answer;
//             this.option=option; 
           
//         }
        
//         question.prototype.display= function(){
//             console.log(this.question);
//             for(i=0;i<question.length;i++) {
//                 console.log( [i] + ':'+this.answer[i]);
                
//             }
//         }
            
        
//         question.prototype.checkans= function (answer){
//             if(answer===this.option){
//                 console.log('correct ans');
        
                
//             }else{
//                 console.log('retry')
//             }
//         }    
        
//         var q1= new question(' which is the world largest contienent', ['asia','africa','australia'],0
//         );
        
        
//         var q2= new question(' which is the world largest ocean',['pacific','indian','artic'],0
//         );
        
        
//         var q3= new question(' which is the world largest country',['russia','africa','australia'],0
//         );

//         var questions=[q1,q2,q3];
        
        
//             var n= Math.floor(Math.random() * questions.length)
//             questions[n].display();
        
//             var answer = parseInt(prompt('please select the correct answer.'));

//            questions[n].checkans(answer)

        
//     }()
    
// )





(

    function(){
        function question (question, option,answer) {
            this.question=question;
            this.option=option; 
            this.answer=answer;
          
           
        }
        
        question.prototype.display= function(){
            console.log(this.question );
            for(i=0;i<this.option.length;i++) {
                console.log( [i] + ':'+this.option[i]);
            }
        }
            
        
        question.prototype.checkans= function (ans,callback){
            if(ans===this.answer){
                var sc
                console.log('correct ans');
                 sc=  callback(true)

            }else{
                console.log('retry')
                sc= callback(false)
            }
             this.displayscore(sc)
    
        }     
        
       question.prototype.displayscore= function(score){
            console.log(score);
            

        }
        var q1= new question(' which is the world largest continent', ['asia','africa','australia'],0
        );
        
        
        var q2= new question(' which is the world largest ocean',['pacific','indian','artic'],0
        );
        
        
        var q3= new question(' which is the world largest country',['russia','africa','australia'],0
        );

        var questions=[q1,q2,q3];

         function score (){
           var sc = 0;
            return function(correct){
            if (correct){
                sc++ 
            }
            return sc; 
            }
            }

       var keepscore=score();

     function nextquestion (){
       
         
         var n= Math.floor(Math.random() * questions.length)
         questions[n].display();

       var answer= prompt('please select the correct answer.');

        if (answer !== 'exit'){
            questions[n].checkans(parseInt(answer),keepscore);

            nextquestion();
        }else{
            console.log("end");
        
        }  
      
     }  
       nextquestion()
      
        
    }()
    
)


