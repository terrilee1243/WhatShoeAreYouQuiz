// quiz.js

const score = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0
  };
  
  const results = {
    1: "Doc Martens,1460 Smooth Leather Lace Up Boots",
    2: "Supreme x Nike SB Dunk High (2003)",
    3: "Jeremy Scott x Wings 4.0 'cloud white.",
    4: "Isabel Marant Bekett Leather Wedge Sneakers",
    5: "Rick Owens DRKSHDW Sneakers",
    6: "AS98 'Torey' Leather Ankle Boots",
    7: "Juicy Couture Almond Blossom Heritage Velour Slipper"
  };
  
  function addScore(type) {
    score[type] += 1;
    console.log(score); // You can remove this in final version
  }
  
  function showResult() {
    const topResult = Object.keys(score).reduce((a, b) => score[a] > score[b] ? a : b);
    const resultText = results[topResult]; // I used chatgpt
  
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('result').textContent = resultText;

    localStorage.setItem("resultInput",resultText)

    window.location.href = "page4.html";

  }
  