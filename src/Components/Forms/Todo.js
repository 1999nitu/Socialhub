import React, { useState } from 'react';
import "./Form.css";
import { AiOutlinePicture } from 'react-icons/ai';
import { FaPoll } from 'react-icons/fa';
import { FiAlignLeft, FiCheckSquare, FiFilm } from 'react-icons/fi';
// import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { AiOutlineEdit, AiOutlineDelete, AiOutlineEllipsis } from 'react-icons/ai';

function Todo(props) {
    const [text,setText] = useState("");
    const [addArr,setAddArr] = useState([]);
    const [editIndex,setEditIndex] = useState(null);
    const [editValue,setEditValue]= useState("");
    const [showMenu, setShowMenu] = useState(false);
    const Add = () => {
        setAddArr([...addArr,text]);
        setText("");
    }

    const edit = (index,value) => {
        setEditIndex(index);
        setEditValue(value);
    }

    const saveEdit = () => {
        // copy all addArr in newArr
        
        const newArr = [...addArr];
        // update value at editIndex
        newArr[editIndex] = editValue;
        // update with newArr
        setAddArr(newArr);
        setEditIndex(null);
        setEditValue("");
    }

    const deleteItem = (index) => {
        const newArr = [...addArr];
        newArr.splice(index, 1);
        setAddArr(newArr);
    }



  return (
    <div className='main_div'>
      {/* <h1 className='todo_heading '>Todolist</h1> */}
      {/* <img src={props.images} alt='User Image' width="110px" className='img-pro' />
      <h3> {props.name}</h3> */}

      <input
        type='text'
        value={text}
        placeholder='Type here'
        className='input_todo'
        onChange={(e) =>setText(e.target.value)}
      />

<div className='under-input'>
        <ul>
            <li>
                <AiOutlinePicture size="24px" color="#333" />
                <span>Image</span>
            </li>
            <li>
                <FiAlignLeft size="24px" color="#333" />
                <span>Image Poll</span>
            </li>
            <li>
                <FiAlignLeft  size="27px" color="#333"/>
                <span>Text Poll</span>
            </li>
            <li>
                <FiCheckSquare  size="27px" color="#333"/>
                <span>Quiz</span>
            </li>
            <li>
                <FiFilm  size="27px" color="#333"/>
                <span>Video</span>
            </li>
            <li>
                 <button className='add' onClick={Add}>Post</button>
            </li>
        </ul>
    </div>

<div className='display_items'>
      <ul>
       {addArr.map((adds,index) => (
        <li key={index}>
            {/* editIndex is a variable storing the index of the item being edited */}
            {editIndex === index ? 
            <input
            type='text'
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className='edit_input'
            />    
            :adds}
            {editIndex === index ?
            <button onClick={saveEdit} className='savebtn'>Save</button>    
            :
            <>
             
                 {/* <button onClick={() => edit(index, adds)} className='edit_btn'>
                    <AiOutlineEdit />
                </button>
                <button onClick={() => deleteItem(index)} className='delete_btn'>
                    <AiOutlineDelete />
                </button> */}
                <button
  onClick={() => setShowMenu(!showMenu)}
  className='edit_btn'
>
  <AiOutlineEllipsis />
</button>

{showMenu && (
  <div className='menu'>
    <button onClick={() => edit(index, adds)} className='edit_btn'>
      <AiOutlineEdit />
    </button>
    <button onClick={() => deleteItem(index)} className='delete_btn'>
      <AiOutlineDelete />
    </button>
  </div>
)}
            </>
        }
        
        </li>
       ))}
      </ul>
</div>

    </div>
  )
}

export default Todo