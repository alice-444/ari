import axios from "axios"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/router"
import { IoCloudDownloadOutline } from "react-icons/io5"

const Book = ({
  _id,
  title: existingTitle,
  author: existingAuthor,
  translator: existingTranslator,
  description: existingDescription,
  publicationDate: existingPublicationDate,
  images: existingImages,
  editor: existingEditor,
  EAN: existingEAN,
  ISBN: existingISBN,
  numberPage: existingNumberPage,
  price: existingPrice,
}) => {
  const [redirect, setRedirect] = useState(false)
  const router = useRouter()

  const [title, setTitle] = useState(existingTitle || "")
  const [author, setAuthor] = useState(existingAuthor || "")
  const [translator, setTranslator] = useState(existingTranslator || "")
  // const [category, setCategory] = useState("");
  const [images, setImages] = useState(existingImages || [])
  const [description, setDescription] = useState(existingDescription || "")
  const [publicationDate, setPublicationDate] = useState(
    existingPublicationDate || ""
  )
  const [editor, setEditor] = useState(existingEditor || "")
  const [EAN, setEAN] = useState(existingEAN || "")
  const [ISBN, setISBN] = useState(existingISBN || "")
  const [numberPage, setNumberPage] = useState(existingNumberPage || "")
  const [price, setPrice] = useState(existingPrice || "")

  const createBook = async (ev) => {
    ev.preventDefault()

    const data = {
      title,
      author,
      translator,
      description,
      publicationDate,
      editor,
      ISBN,
      EAN,
      numberPage,
      price,
    }

    if (_id) {
      await axios.put("/api/books", { ...data, _id })
    } else {
      await axios.post("/api/books", data)
    }

    setRedirect(true)
  }

  if (redirect) {
    router.push("/books")
    return null
  }

  return (
    <div>
      <form onSubmit={createBook} className="mx-auto max-w-screen-sm">
        <div className="my-4">
          <div>
            <label
              htmlFor="titleInput"
              class="mb-1 block text-lg font-medium text-gray-700 py-1"
            >
              Title
            </label>
            <input
              type="text"
              id="titleInput"
              class="block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 p-3"
              placeholder="Enter book title"
              value={title}
              onChange={(ev) => setTitle(ev.target.value)}
            />
          </div>
        </div>
        <div className="my-4">
          <div>
            <label
              htmlFor="example1"
              class="mb-1 block text-lg font-medium text-gray-700 py-1"
            >
              Author
            </label>
            <input
              type="text"
              id="example1"
              class="block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 p-3"
              placeholder="Enter author name"
              value={author}
              onChange={(ev) => setAuthor(ev.target.value)}
            />
          </div>
        </div>
        <div className="my-4">
          <div>
            <label
              htmlFor="example1"
              class="mb-1 block text-lg font-medium text-gray-700 py-1"
            >
              Translator
            </label>
            <input
              type="text"
              id="example1"
              class="block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 p-3"
              placeholder="Enter translator"
              value={translator}
              onChange={(ev) => setTranslator(ev.target.value)}
            />
          </div>
        </div>
        <div class="mx-auto my-4">
          <div>
            <label
              htmlFor="example1"
              class="mb-1 block text-lg font-medium text-gray-700 py-1"
            >
              Select Category
            </label>
            <select class="block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 p-3">
              <option value="">No category selected</option>
              <option value="">Option02</option>
              <option value="">Option03</option>
            </select>
          </div>
        </div>

        <div class="mx-auto my-4">
          <div class="mx-auto">
            <label
              htmlFor="example1"
              class="mb-1 block text-lg font-medium text-gray-700 py-1"
            >
              Images
            </label>
            <label class="flex w-full cursor-pointer appearance-none items-center justify-center rounded-md border-2 border-dashed border-red-300 p-6 transition-all hover:border-primary-300">
              <div class="space-y-1 text-center">
                <div class="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                  <IoCloudDownloadOutline />
                </div>
                <div class="text-gray-600">
                  <Link
                    href="#"
                    class="font-medium text-primary-500 hover:text-primary-700"
                  >
                    Click to upload
                  </Link>{" "}
                  or drag and drop
                </div>
                <p class="text-sm text-gray-500">
                  SVG, PNG, JPG or GIF (max. 800x400px)
                </p>
              </div>
              <input
                id="fileInput"
                type="file"
                className="hidden"
                accept="image/*"
                multiple
                value={images}
              />
            </label>
          </div>
        </div>

        <div class="mx-auto my-4">
          <div>
            <label
              htmlFor="example1"
              class="mb-1 block text-lg font-medium text-gray-700 py-1"
            >
              Description
            </label>
            <textarea
              rows={5}
              type="text"
              id="example1"
              class="block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 p-3"
              placeholder=" Enter description"
              value={description}
              onChange={(ev) => setDescription(ev.target.value)}
            />
          </div>
        </div>
        <div className="my-4">
          <div>
            <label
              htmlFor="example1"
              class="mb-1 block text-lg font-medium text-gray-700 py-1"
            >
              Publication date
            </label>
            <input
              type="date"
              id="example1"
              class="block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 p-3"
              placeholder="Enter Publication date book's"
              value={publicationDate}
              onChange={(ev) => setPublicationDate(ev.target.value)}
            />
          </div>
        </div>
        <div className="my-4">
          <div>
            <label
              htmlFor="example1"
              class="mb-1 block text-lg font-medium text-gray-700 py-1"
            >
              Editor
            </label>
            <input
              type="text"
              id="example1"
              class="block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 p-3"
              placeholder="Enter Editor Book's"
              value={editor}
              onChange={(ev) => setEditor(ev.target.value)}
            />
          </div>
        </div>
        <div className="my-4">
          <div>
            <label
              htmlFor="example1"
              class="mb-1 block text-lg font-medium text-gray-700 py-1"
            >
              EAN
            </label>
            <input
              type="text"
              id="example1"
              class="block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 p-3"
              placeholder="Enter EAN"
              value={EAN}
              onChange={(ev) => setEAN(ev.target.value)}
            />
          </div>
        </div>
        <div className="my-4">
          <div>
            <label
              htmlFor="example1"
              class="mb-1 block text-lg font-medium text-gray-700 py-1"
            >
              ISBN
            </label>
            <input
              type="text"
              id="example1"
              class="block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 p-3"
              placeholder="Enter ISBN"
              value={ISBN}
              onChange={(ev) => setISBN(ev.target.value)}
            />
          </div>
        </div>
        <div class="mx-auto my-4">
          <div>
            <label
              htmlFor="example1"
              class="mb-1 block text-lg font-medium text-gray-700 py-1"
            >
              Page number
            </label>
            <input
              type="number"
              id="example1"
              class="block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 p-3"
              placeholder="Enter Page number"
              value={numberPage}
              onChange={(ev) => setNumberPage(ev.target.value)}
            />
          </div>
        </div>

        <div class="mx-auto my-4">
          <div>
            <label
              htmlFor="example1"
              class="mb-1 block text-lg font-medium text-gray-700 py-1"
            >
              Price
            </label>
            <input
              type="number"
              id="example1"
              class="block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 p-3"
              placeholder="Enter Book price"
              value={price}
              onChange={(ev) => setPrice(ev.target.value)}
            />
          </div>
        </div>

        <div class="mx-auto my-4">
          <button
            className="inline-block rounded border border-red-300 px-12 py-3 text-semibold font-d text-red-300 hover:bg-red-400 hover:text-white focus:outline-none focus:ring active:bg-green-500 w-full"
            type="submit"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  )
}

export default Book