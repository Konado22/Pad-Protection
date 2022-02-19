//this page is to reference adding an item to a property
import { useMutation } from '@apollo/client';
import {add_items} from '../../../../server/schemas/index'
export const addItems = () => {
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
      };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
    }
        
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log(userFormData)
    setItemFormData({
        username: "",
        email: "",
        password: "",
    })
    
    return(
        <div style={{display:'flex', flexDirection: 'column'}}>
            <form style={{display:"flex", justifyContent:"center",flexDirection:"column" ,alignItems:'center'}}>
                <label> Item Name:<input type="text" placeholder="item name"></input></label>
                <label> Item Category:<input type="text" placeholder="item category"></input></label>
                <label> Item Value:<input type="text" placeholder=" value of item"></input></label>
                <label> Date Purchased:<input type="text" placeholder=" Date Purchased"></input></label>
                <label> Room:<input type="text" placeholder="room "></input></label>
                <input className='btn btn-secondary' type="button">Submit</input>
            </form>
        </div>
    )}
