import Book from "@/components/Book.jsx"
const AddBooks = () => {
    return (
      <div>
        <div className="sm:flex sm:items-center sm:justify-between py-3">
          <div className="text-center sm:text-left">
            <p className="text-gray-500 mt-1.5 text-xl max-w-lg">
              Let's add a new book !
            </p>
          </div>
        </div>
  
        <hr className="h-px border-0 bg-gray-300" />
  
        <div className="my-10">
          <Book />
        </div>
      </div>
    )
  }
  
  export default AddBooks