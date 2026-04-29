 function matchLove() {
    const name1 = document.getElementById("first").value;
    const name2 = document.getElementById("second").value;
    const result = document.getElementById("result");

    if (name1 === "" || name2 === "") {
        result.textContent = "PLease enter both names";
        return; 
    }
      const loveScore = Math.floor(Math.random()*100) + 1;
      result.textContent = '${name1}💕 ${name2}💕 = ${loveScore}%';
      
      if (loveScore >= 90) {
        result.textContent += "Perfect Match 💖"; 
      } 
      else if (loveScore >= 70) {
        result.textContent += "Good Match 🧡"; 
      } 
      else if (loveScore >= 50) {
        result.textContent += "Average Match 💚"; 
      } 
      else if (loveScore >= 25) {
        result.textContent += "Poor March 🤍"; 
      } 
      else (loveScore < 25) {
        result.textContent += "No Match 😎";
      }

    
 }