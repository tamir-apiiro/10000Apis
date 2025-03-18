
const express = require('express')
import {handler8911} from "./handler8911";
const app = express()
app.get('/8911', handler8911)
app.listen(3000, () => {})
        