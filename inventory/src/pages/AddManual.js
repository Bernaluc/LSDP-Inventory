import React from "react";
import Button from 'react-bootstrap/Button'



function AddManual(){
    return(
        <div className="add-page">
            <form>
            <h1> Add New Manual</h1>
            <label>
                Manual Name:
                <input type="text" name="manual-name" />
            </label>
            <label>
                Manual Link:
                <input type="text" name='manual-link' />
            </label>
            
            <input type="submit" value="Submit" />
            </form> 
            <Button href='/add-area' variant='secondary' size='lg'>
                Add New
            </Button>
        </div>
    )
}

export default AddManual;