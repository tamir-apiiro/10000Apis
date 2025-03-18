
const express = require('express')
import {handler8656} from "./handler8656";
const app = express()
app.get('/8656', handler8656)
app.listen(3000, () => {})
        