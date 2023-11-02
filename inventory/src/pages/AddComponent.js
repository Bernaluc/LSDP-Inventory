import React from "react";

function AddComponent(){
    return(
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
    )
}

export default AddComponent;
