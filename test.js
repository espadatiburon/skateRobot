function myRobot()
{
  var button = document.getElementById("myButton");
  var elem = document.getElementById("myAnimation"); 
  var pos = 0;
  var id;

  this.myMove = function()
  {  
    clearInterval(id);
    id = setInterval(frame, 1);

    if(button.textContent == "Start")
    {
      button.textContent = "Stop";
    }
    else
    {
       button.textContent = "Start";
    } 

    function frame() {
    if(button.textContent == "Start")
    {
      elem.style.left = pos + 'px';
    }
     else
     {
        pos++; 
        elem.style.left = pos + 'px'; 
        if(pos == window.innerWidth)
        {
          pos = 0;
        }
     }
    }
  }
}