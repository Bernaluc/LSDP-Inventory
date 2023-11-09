import React from "react";
import Button from 'react-bootstrap/Button'



function AddArea(){
    return(
        <div className="add-page">
            <form>
            <h1> Add New Area</h1>
            <label>
                Area ID:
                <input type="text" name="area-id" />
            </label>
            <label>
                Worker Notes:
                <input type="text" name='area-notes' />
            </label>
            
            <input type="submit" value="Submit" />
            </form> 
            <Button href='/add-area' variant='secondary' size='lg'>
                Add New
            </Button>
        </div>
    )
}

export default AddArea;