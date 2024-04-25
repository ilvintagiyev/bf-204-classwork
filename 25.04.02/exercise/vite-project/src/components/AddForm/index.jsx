
const AddForm = () => {
  return (
    <div>
        <form>
            <label>
                Course Name
                <input type="text" name="name" />
                <br />
            </label>
            <label>
                Course Price
                <input type="number" name="price"  />
                <br />
            </label>
            <label>
                Course Image
                <input type="img" name="image" />
                <br />
            </label>
            <button>Add</button>
        </form>
    </div>
  )
}

export default AddForm