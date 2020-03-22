import express from 'express'
import graphqlHTTP from 'express-graphql'
import { schema } from './data/schema'

const app = express();

app.get('/', (req, res) => {
    res.send('Graph QL is awesome')
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}))

app.listen(8086, () => console.log('Running server on port localhost:8086/graphql'))
