import React from "react";
import Button from 'react-bootstrap/Button'

function AddComponent(){
    return(
        <div className="add-page">
            <h1> Add Component </h1>
            <form>
                <label>
                    Component Name:
                    <input type="text" name="component-name" />
                </label>
                <label>
                    Description:
                    <input type="text" name='description' />
                </label>
                <label>
                    Part Number:
                    <input type="text" name='part' />
                </label>
                <label>
                    Worker Name:
                    <input type='text' name='worker-name' />
                </label>
                <label>
                    Equipment Name:
                    <input type='text' name='equipment-name' />
                </label>
            
                <input type="submit" value="Submit" />
            </form>
                <Button href='/view-components' variant='secondary' size='lg'>
                    View All Components   
                </Button> 
            </div>
            
    )
}

export default AddComponent;
