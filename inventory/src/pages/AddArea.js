function AddArea(){
    return(
            <form>
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
    )
}

export default AddArea;