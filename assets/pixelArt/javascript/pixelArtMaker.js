var currentColor = 'white';

function createSquare(color, size){

	var square = document.createElement('div');

	sizeAndPositonSaqure(square, size,size);
 	colorSquare(square, color);

 	return square;
}

function sizeAndPositonSaqure(square, size, padding){
	square.style.width = size;
 	square.style.height = size;
 	square.style.float = 'left';
 	square.style.paddingBottom = size;
 	square.style.border = '1px solid black';
 	square.style.marginLeft = '0.28%';
 	square.style.marginBottom = '0.25%';

}

function colorSquare(square, color){
	 square.style.background = color;
}

function appendToBody(children){
	var body = document.getElementsByTagName('body')[0];
	for(var i = 0; i< children.length; i++){
	body.appendChild(children[i]);
	}
}


function createCheckeredBoard(color, size){
	this.color = color;
	this.size = size;

	var checkeredBoard = [];
	for (var i = 0; i< size; i++){

		var square = createSquare(color,'1.5%');
	
		checkeredBoard.push(square);
		
	}

	appendToBody(checkeredBoard);
	return checkeredBoard;
}

function generateRandomColor(){
	var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color.toString();
}


function numberOfSquresPerRow(square){
	var screenWidth = screen.width;

	return  screenWidth / (0.015 * screenWidth  + 0.0025* screenWidth);
}

function addActionToBoard(squares, callback){
	for (var i =0; i < squares.length; i++){
		squares[i].addEventListener('mouseenter', callback);
	}
}

var squares = createCheckeredBoard('white', 52 * 32);

var colorPaletteInput = document.getElementById('background-color');
currentColor = colorPaletteInput.value;

colorPaletteInput.addEventListener('change', function(e){
	

		currentColor = e.target.value;
	
});

addActionToBoard(squares,function(e){
	if(e.buttons === 1){
		e.target.style.background = currentColor;
	}	
	
	
});
