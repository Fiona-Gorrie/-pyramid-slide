let brickElem = document.getElementById("brick");
let heightElem = document.getElementById("height");

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
    document.getElementById("heightNumber").innerHTML = heightElem.value;

    // for each row....
    for (let row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        let numBricks = row + 2;
        let numSpaces = height - row - 1;

        // build up a string for this row
        let rowStr = "";
        for (let i = 0; i < numSpaces; i++) {
            let spaceChar = "&nbsp";
            rowStr += spaceChar;
        }
        for (let i = 0; i < numBricks; i++) {
            rowStr += brickElem.value;
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
