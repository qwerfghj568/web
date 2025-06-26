var boxes = document.getElementsByClassName('box');

for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', function () {
    for (var j = 0; j < boxes.length; j++) {
      if (boxes[j]!= this) {
        this.style.height = '100%';
        this.style.width = '100%';
      } 
    }
  });
}