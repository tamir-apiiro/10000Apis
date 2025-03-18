
const express = require('express')
import {handler1292} from "./handler1292";
const app = express()
app.get('/1292', handler1292)
app.listen(3000, () => {})
        