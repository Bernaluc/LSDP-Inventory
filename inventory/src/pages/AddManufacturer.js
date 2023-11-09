import React from "react";
import Button from 'react-bootstrap/Button'

function AddManufacturer(){
    return(
        <div className="add-page">
            <h1>Add Manufacturer</h1>
            <form>
            <label>
                Manufacturer Name:
                <input type="text" name="manufacturer-name" />
            </label>
            <label>
                Manufacturer Email:
                <input type="text" name='manufacturer-email' />
            </label>
            <label>
                Manufacturer Phone:
                <input type="text" name='manufacturer-phone' />
            </label>
            <label>
                Manufacturer Notes:
                <input type="text" name='manufacturer-notes' />
            </label>
            
            <input type="submit" value="Submit" />
            </form> 
            <Button href='/view-components' variant='secondary' size='lg'>
                    View All Manufacturers  
                </Button> 
        </div>
    )
}

export default AddManufacturer;