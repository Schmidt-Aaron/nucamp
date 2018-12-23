const game = () => {
  let right = document.querySelector(".right");
  let left = document.querySelector(".left");
  const face = "../../assets/smile.png";
  const theBody = document.querySelector("body");
  let numberFaces = 5;

  // generates a number between 20 and 460
  const location = () => {
    return 20 + Math.floor(Math.random() * 440);
  };

  // generates 5 faces and adds to left div
  const generateFaces = () => {
    for (let i = 0; i < numberFaces; i++) {
      let smiley = document.createElement("img");
      smiley.src = face;
      smiley.style.position = "absolute";
      smiley.style.top = `${location()}px`;
      smiley.style.left = `${location()}px`;
      smiley.style.height = "36px";
      smiley.style.width = "36px";
      left.appendChild(smiley);
    }

    // copies the faces to the other side
    copyFaces();
  };

  // copies all faces except last child to the right side
  const copyFaces = () => {
    rightCopy = left.cloneNode(true);
    rightCopy.className = "box";
    rightCopy.removeChild(rightCopy.lastChild);
    right.appendChild(rightCopy);
    addEvent();
  };

  // adds the event listener to the last child on the left side
  const addEvent = () => {
    let last = left.lastChild;
    last.setAttribute("clicked", false);
    last.addEventListener("click", function(e) {
      faceClick(e);
    });
  };

  const faceClick = e => {
    e.stopPropagation();
    numberFaces += 5;
    removeFaces();
  };

  // removes all the faces
  const removeFaces = () => {
    right.removeChild(right.lastChild);
    while (left.firstChild) {
      left.removeChild(left.lastChild);
    }
    generateFaces();
  };

  // ends the game
  const gameOver = () => {
    alert("Game Over!");
    theBody.removeEventListener("click", gameOver);
    let copy = left.lastChild.cloneNode(true);
    left.replaceChild(copy, left.lastChild);
  };

  theBody.addEventListener("click", gameOver);

  // fires the above functions
  generateFaces();
};

// loads code on page loae
window.onload = game();
