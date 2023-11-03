import React from "react";
import Button from 'react-bootstrap/Button'

function AddPart(){
    return(
        <div className="add-page">
            <h1>Add Part</h1>
            <form>
            <label>
                Part Name:
                <input type="text" name="part-id" />
            </label>
            <label>
                Part Manufacturer:
                <input type="text" name='part-manufacturer' />
            </label>
            <label>
                Part Manuals:
                <input type="text" name='part-manuals' />
            </label>
            <label>
                Part Notes:
                <input type="text" name='part-notes' />
            </label>
            <label>
                Storeroom Number:
                <input type="text" name='storeroom-number' />
            </label>
            <label>
                Last Modified:
                <input type="text" name='last-modified' />
            </label>
            <input type="submit" value="Submit" />
            </form> 
            <Button href='/view-parts' variant='secondary' size='lg'>
                    View All Parts   
                </Button> 
        </div>
    )
}

export default AddPart;