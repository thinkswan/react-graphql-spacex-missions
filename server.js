const express = require("express")
const graphQLHTTP = require("express-graphql")
const cors = require("cors")
const schema = require("./schema")

const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())

app.use(
  "/graphql",
  graphQLHTTP({
    schema,
    graphiql: true
  })
)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
