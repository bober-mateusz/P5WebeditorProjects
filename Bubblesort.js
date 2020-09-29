const LENGTH = 400;
const WIDTH = 400;
const AMOUNT = LENGTH;
var arr = [];
function setup() {
  createCanvas(LENGTH,WIDTH);
  frameRate(120);
  
    for(let i = 0; i <= AMOUNT; i++)
  {
      arr.push(random(10,LENGTH));
  }
}
var limiter = AMOUNT-1;
function draw() {
  background(190);
  //limter = Amount-1
  
    //Do a loop for all unsorted elements
    for(let j = 0; j < limiter; j++)
    {
      //Give a black stroke to the line
      stroke(0);
      //Draw the line where the sort currently is
      line(limiter,0,limiter,400);
      
      //Swap numbers for bubblesort
       if(arr[j] < arr[j+1])
       {
         var temp = arr[j];
         arr[j] = arr[j+1];
         arr[j+1] = temp;
       } 
      
      //Adjust how often the Bubble sort is visualised
      if(j % 100 == 0)
      {
        for(let z = 0; z < arr.length; z++)
        {  
         stroke(255-z/3,0,z);
         line(z,arr[z],z,arr[z] + LENGTH);
        }
      }
    }
  limiter--;
  
  if(limiter == 1)
  {
   noLoop();
    console.debug(arr);
  }
  
}







