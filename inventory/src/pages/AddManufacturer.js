import React from "react";
import Button from 'react-bootstrap/Button'

function AddWorker(){
    return(
        <div className="add-page">
            <h1>Add Worker</h1>
            <form>
            <label>
                Worker Name:
                <input type="text" name="worker-id" />
            </label>
            <label>
                Worker Notes:
                <input type="text" name='worker-notes' />
            </label>
            
            <input type="submit" value="Submit" />
            </form> 
            <Button href='/view-components' variant='secondary' size='lg'>
                    View All Workers   
                </Button> 
        </div>
    )
}

export default AddWorker;