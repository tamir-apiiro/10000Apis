
const express = require('express')
import {handler911} from "./handler911";
const app = express()
app.get('/911', handler911)
app.listen(3000, () => {})
        