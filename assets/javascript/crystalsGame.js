

  var targetNumber = 0;
  var userScore =0;
  var crystal1Reward = 0;
  var crystal2Reward = 0;
  var crystal3Reward = 0;
  var crystal4Reward = 0;
  var winCount = 0;
  var loseCount =0;
  $(document).ready(function(){
  
    $("#TotalScoreValue").text(userScore);
    targetNumber=Math.floor(Math.random()*90+10);
    $("#TargetNumber").text(targetNumber);
    crystal1Reward=Math.floor(Math.random()*10+1);
    crystal2Reward=Math.floor(Math.random()*10+1);
    crystal3Reward=Math.floor(Math.random()*10+1);
    crystal4Reward=Math.floor(Math.random()*10+1);
   
  }
  );
 function ButtonScore(obj){
    var Reward =0;
    if (obj.id == "crystalButton1") {
      //alert("hiiii");
      Reward = crystal1Reward;

    }
    if (obj.id == "crystalButton2") {
      //alert("hiiii");
      Reward = crystal2Reward; 
  }
  if (obj.id == "crystalButton3") {
    //alert("hiiii");
    Reward = crystal3Reward;
  }
    if (obj.id == "crystalButton4") {
      //alert("hiiii");
      Reward = crystal4Reward;
    }

   userScore = userScore + Reward;
   $("#TotalScoreValue").text(userScore);
   
   if (userScore == targetNumber) //check weather has won the game
   {
   //user has won the game
   winCount = winCount+1;
   $("#Wins").text("Wins : " + winCount);
   userScore = 0;
   $("#TotalScoreValue").text(userScore);
    targetNumber=Math.floor(Math.random()*90+10);
    $("#TargetNumber").text(targetNumber);
    crystal1Reward=Math.floor(Math.random()*10+1);
    crystal2Reward=Math.floor(Math.random()*10+1);
    crystal3Reward=Math.floor(Math.random()*10+1);
    crystal4Reward=Math.floor(Math.random()*10+1);
   }
  
   else if (userScore >targetNumber )// check if user lost 
   {
    //user has loss the game 
    loseCount = loseCount+1;
    $("#Loses").text("Losses : " + loseCount);
    userScore = 0;
    $("#TotalScoreValue").text(userScore);
    targetNumber=Math.floor(Math.random()*90+10);
    $("#TargetNumber").text(targetNumber);
    crystal1Reward=Math.floor(Math.random()*10+1);
    crystal2Reward=Math.floor(Math.random()*10+1);
    crystal3Reward=Math.floor(Math.random()*10+1);
    crystal4Reward=Math.floor(Math.random()*10+1);
   }

   else (userScore < targetNumber) //game is not over
   
   {
    //nothing to do for continuing the game
   }
  return;
  }

  
  

  

  