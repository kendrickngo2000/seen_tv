import { React, useState } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import Solver from "./solver.js";


function Board(){
	// just an empty array, keeping it here lets me only make it once
	const  emptyArray = 
	[
		['', '', '', '', '', '', '', '', ''],
		['', '', '', '', '', '', '', '', ''],
		['', '', '', '', '', '', '', '', ''],
		['', '', '', '', '', '', '', '', ''],
		['', '', '', '', '', '', '', '', ''],
		['', '', '', '', '', '', '', '', ''],
		['', '', '', '', '', '', '', '', ''],
		['', '', '', '', '', '', '', '', ''],
		['', '', '', '', '', '', '', '', '']
	];

	// this is so we can keep the board values from render to render.
	const [ boardArray, setArray ] = useState( emptyArray );


	// empty out the board and array, called when the reset button is pressed.
	function clearBoard() {
		for( let i = 0; i < 81; i++) {
			let square = document.getElementById(String(i));
			
			setArray(emptyArray);
		
			square.value = "";

		}
	};

	// this checks to see if the user is entering a number or not, if its alpha
	// it never echos. so you can only enter numbers
	function handleChange( e )
	{
		let attemptedValue = e.target.value;

		// if the attempted input is a number
		if (+attemptedValue)
		{
			// then set it as the value
			let id = e.target.id;
			// arrays are immutable so copy that hoe
			let copy = [...boardArray];

			// use math to convert id into array coords.
			let row = Math.floor( id / 9 );
			let col = ( id % 9 );
			
			// this is where the value is set in the array
			copy[ row ][ col ] = attemptedValue;
			setArray( copy );
			// this is where the value is set to the contents of the array
			e.target.value = boardArray[row][col];

		} else 
		{
			// if its anything but a number dont assign it
			e.target.value = "";

		};
	};

	// this creates a new solver and attempts to solve the puzzle.
	function handleSolve( e )
	{
		let solver = new Solver( boardArray );
		let rowCheck = solver.checkRow( 0, 1 );
		console.log( rowCheck );
	}

	return(
		<div className="container">
		<div className="board">
		<div className="row-1">
			<input type='text' className='Square Square-left Square-top' id="0"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-top' id="1"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-top Square-right' id="2"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-top Square-left' id="3"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-top' id="4"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-top Square-right' id="5"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-top Square-left' id="6"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-top' id="7"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-top Square-right' id="8"
			maxLength='1' onChange={ handleChange } />
			</div>
			<div className="row-2">
			<input type='text' className='Square Square-left' id="9"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square' id="10"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-right' id="11"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-left' id="12"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square' id="13"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-right' id="14"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-left' id="15"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square' id="16"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-right' id="17"
			maxLength='1' onChange={ handleChange } />
			</div>
			<div className="row-3">
			<input type='text' className='Square Square-left Square-bottom' id="18"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-bottom' id="19"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-right Square-bottom' id="20"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-left Square-bottom' id="21"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-bottom' id="22"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-right Square-bottom' id="23"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-left Square-bottom' id="24"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-bottom' id="25"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-right Square-bottom' id="26"
			maxLength='1' onChange={ handleChange } />
			</div>
			<div className="row-4">
			<input type='text' className='Square Square-left Square-top' id="27"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-top' id="28"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-top Square-right' id="29"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-top Square-left' id="30"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-top' id="31"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-top Square-right' id="32"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-top Square-left' id="33"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-top' id="34"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-top Square-right' id="35"
			maxLength='1' onChange={ handleChange } />
			</div>
			<div className="row-5">
			<input type='text' className='Square Square-left' id="36"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square' id="37"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-right' id="38"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-left' id="39"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square' id="40"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-right' id="41"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-left' id="42"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square' id="43"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-right' id="44"
			maxLength='1' onChange={ handleChange } />
			</div>
			<div className="row-6">
			<input type='text' className='Square Square-left Square-bottom' id="45"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-bottom' id="46"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-right Square-bottom' id="47"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-left Square-bottom' id="48"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-bottom' id="49"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-right Square-bottom' id="50"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-left Square-bottom' id="51"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-bottom' id="52"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-right Square-bottom' id="53"
			maxLength='1' onChange={ handleChange } />
			</div>
			<div className="row-7">
			<input type='text' className='Square Square-left Square-top' id="54"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-top' id="55"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-top Square-right' id="56"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-top Square-left' id="57"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-top' id="58"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-top Square-right' id="59"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-top Square-left' id="60"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-top' id="61"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-top Square-right' id="62"
			maxLength='1' onChange={ handleChange } />
			</div>
			<div className="row-8">
			<input type='text' className='Square Square-left' id="63"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square' id="64"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-right' id="65"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-left' id="66"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square' id="67"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-right' id="68"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-left' id="69"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square' id="70"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-right' id="71"
			maxLength='1' onChange={ handleChange } />
			</div>
			<div className="row-9">
			<input type='text' className='Square Square-left Square-bottom' id="72"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-bottom' id="73"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-right Square-bottom' id="74"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-left Square-bottom' id="75"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-bottom' id="76"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-right Square-bottom' id="77"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-left Square-bottom' id="78"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-bottom' id="79"
			maxLength='1' onChange={ handleChange } />
			<input type='text' className='Square Square-right Square-bottom' id="80"
			maxLength='1' onChange={ handleChange } />
			</div>
		</div>
		<ButtonGroup className="Button-Group">
			<Button className="Button" onClick={ clearBoard }>Reset</Button>		
			<Button className="Button" onClick={ handleSolve }>Solve</Button>	
		</ButtonGroup>	
		</div>
		
	);
};

export default Board;
