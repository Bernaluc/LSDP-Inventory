function AddWorker(){
    return(
            <form>
            <label>
                Worker ID:
                <input type="text" name="worker-id" />
            </label>
            <label>
                Worker Notes:
                <input type="text" name='worker-notes' />
            </label>
            
            <input type="submit" value="Submit" />
            </form> 
    )
}

export default AddWorker;