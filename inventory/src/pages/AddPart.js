import React from "react";

function AddPart(){
    return(
            <form>
            <label>
                Part ID:
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
    )
}

export default AddPart;