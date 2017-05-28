app.controller('ProgressBarController', ['$scope', ($scope) => {

  $scope.progressBar = () => {
   let elem = document.getElementById("bar"),
       width = 0,
       id = setInterval(frame, 4);
   function frame(){
     if (width >= 100) {
       clearInterval(id);
       document.getElementById("progressBar").innerHTML = ''
     } else {
       width++;
       elem.style.width = width + '%';
       elem.innerHTML = width * 1  + '%';
     }
   }
  }
}])
