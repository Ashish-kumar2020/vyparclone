import React, {useState} from 'react'
import logo from  '../Assets/companylogo.jpg'
import Dropdown from './Dropdown';
import FormComponent from './FormComponent';


const Navbar = () => {
    const [inputValue, setInputValue] = useState('');
  const [showInput, setShowInput] = useState(true);
  

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      // Update the displayed value on Enter key press
      setInputValue(event.target.value);
      setShowInput(false); // Hide the input field after pressing Enter
    }
  };

  const handleBlur = () => {
    // Hide the input field when it loses focus (e.g., on clicking outside)
    setShowInput(false);
  };



  const [showForm, setShowForm] = useState(false);

  const handleImageClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="header flex justify-between shadow-lg">
        <div className="logo-container flex justify-center">
            <img
                className="logo w-[80px]"
                src={logo}
                alt='companylogo'
               onClick={handleImageClick}
            />
            {showForm && <FormComponent onClose={handleCloseForm}/>}
           {showInput && (
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          onBlur={handleBlur}
          placeholder="Enter Company Name..."
          className="border border-gray-400 p-2 w-[160px] h-[42px] mt-[25px]"
        />
      )}
      {inputValue && !showInput && <p className="w-[160px] h-[42px] mt-[32px]"> {inputValue}</p>}
            </div>
            <div className='nav-items'>
            <ul className="flex py-6 mt-[5px]">
                   
                        <li className="nav-list px-5 cursor-pointer">Home</li>
                   
                   
                        <li className="nav-list px-5 cursor-pointer" >Parties</li>
                  
                   
                         <li className="nav-list px-5 cursor-pointer">Items</li>
                         <div className="relative">
                            <Dropdown label="Sales" />
                            
                        </div>
                        <div className="relative">
                            <Dropdown label="Purchase" />
                            
                        </div>
                         <li className="nav-list px-5 cursor-pointer">Expense</li>
                </ul>
            </div>
            
    </div>
  )
}

export default Navbar