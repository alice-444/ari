import mongoose from "mongoose"

const MongooseConnect = () => {
  if (mongoose.connection.readyState === "1") {
    return mongoose.connection.asPromise()
  } else {
    const url = process.env.MONGODB_URL
    return mongoose.connect(url)
  }
}

export default MongooseConnect