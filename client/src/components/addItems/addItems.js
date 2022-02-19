//this page is to reference adding an item to a property
import { useMutation } from '@apollo/client';
// import {add_items} from '../../../../server/schemas/index'
import { Card, Form } from 'react-bootstrap';

const AddItems = () => {
    // const handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     setItemFormData({ ...itemFormData, [name]: value });
    //   };

    // const handleFormSubmit = async (event) => {
    //     event.preventDefault();
    // }
        
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }
    // console.log(itemFormData)
    // setItemFormData({
    //     Item Name: "",
    //     Item Category: "",
    //     Item Value: "",
        // Date Purchased: "",
        // Room: "",
    // })
    
    return(
        <Card style={{display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems:"center",backgroundColor:"darkblue"}}>
            <Form style={{display:"flex", justifyContent:"center",flexDirection:"column" ,alignItems:'center'}}>
                <Form.Label> Item Name:<Form.Control type="text" placeholder="describe item"></Form.Control></Form.Label>
                <Form.Label> Item Category:<Form.Control type="text" placeholder="electronic,furniture"></Form.Control></Form.Label>
                <Form.Label> Item Value:<Form.Control type="text" placeholder=" value of item"></Form.Control></Form.Label>
                <Form.Label> Date Purchased:<Form.Control type="text" placeholder=" Date Purchased"></Form.Control></Form.Label>
                <Form.Label> Room:<Form.Control type="text" placeholder="room "></Form.Control></Form.Label>
                <Form.Control type="submit" onClick={ (e)=> {
                    e.preventDefault()
                }}></Form.Control>
            </Form>
        </Card>
    )}
export default AddItems;