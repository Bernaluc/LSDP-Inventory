import React from "react";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function AddEquipment() {
    return(
        <div className="add-page">
            <h1>Add Equipment</h1>
            <form>
            <label>
                Equipment Name:
                <input type="text" name="worker-id" />
            </label>
            <label>
                Notes:
                <input type="text" name='worker-notes' />
            </label>
            <label>
                Area(s):
                <select name='select-areas' multiple>
                    <option value='option1'>Dryer 1</option>
                    <option value='option2'>RO/Water</option>
                    <option value='option3'>Evap 1</option>
                </select>
            </label>
            
            <input type="submit" value="Submit" />
            </form> 
            <Button href='/view-equipment' variant='secondary' size='lg'>
                    View All Equipment   
                </Button> 
        </div>
    )
}


export default AddEquipment;