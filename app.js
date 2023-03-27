import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

import { getCrashes, getCrash } from './database.js'

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', async (req, res) => {
    // const id = req.params.id
    // const crash = await getCrash(id)
    const crashes = await getCrashes()
    res.render('index', { data: crashes })
})

app.get('/crashes', async (req, res) => {
    const crashes = await getCrashes()
    //res.render(crashes)

    res.send(crashes)
})

app.get('/crashes/:id', async (req, res) => {
    const id = req.params.id
    const crash = await getCrash(id)
    //res.send(crash)
    res.render('index', { data: crash })
})

// app.use((err, req, res, next) => {
//     //console.error(err.stack)
//     res.status(500).send('Something broke!')
// })

app.listen(3000, () => {
    console.log('Running on port 3000')
})