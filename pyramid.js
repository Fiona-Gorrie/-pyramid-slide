var brickElem = document.getElementById("brick").value;
var heightElem = document.getElementById("height").value;

//value of range displayed in heightNumber <p>
//document.getElementById("heightNumber").innerHTML = heightElem;


//pyramid to change symbol(brick)
//brickElem.onchange = drawPyramid(brickElem)

//pyramid to change size 
//heightElem.oninput = drawPyramid(heightElem);    


function drawPyramid(height) {

    // first, clear the old content
    document.getElementById("pyramid").innerHTML = "";

    //change the height of pyramid 
    document.getElementById("heightNumber").innerHTML = heightElem;

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp";
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += "#"; //rowStr += brickType.value;
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}