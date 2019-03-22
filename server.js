const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()


    server.get('/todos', (req, res) => {
     
      return res.send(
        [{text:'Eat good ', key: 1},
        {text:'Sleep well ', key: 2},
        {text:'Complete chores ', key: Date.now()}
        ])
     
    })
    
    server.get('/', (req,res) => {
     return app.render(req, res, '/index')
    })

    server.get('*', (req, res) => {
        app.render(req, res )
    })

    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })