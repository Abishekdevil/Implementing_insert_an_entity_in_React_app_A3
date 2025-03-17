import React from 'react'
import {useNavigate} from 'react-router-dom';

function AddMovie() {

   const nav=useNavigate();
   const handleCancel=()=>{
    nav('/')
   }

  return (
    <div>
        <form>
            <input type='text' placeholder='Title'></input><br></br><br></br>
            <input type='text' placeholder='Director'></input>
            <select>
                <option>genre</option>
                <option>Comedy</option>
                <option>Action</option>
                <option>Horror</option>
            </select><br></br><br></br>
            <input type='number' placeholder='Release Year'></input><br></br><br></br>
            <textarea placeholder='Synopsis'></textarea><br></br><br></br>
            <input type='text' placeholder='Poster Image URL'></input><br></br><br></br>
            <button onClick={handleCancel} className='cancel-button'>Cancel</button>
            <button className='submit-button'>Submit</button>

        </form>
      
    </div>
  )
}

export default AddMovie
