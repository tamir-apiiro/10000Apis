
const express = require('express')
import {handler8523} from "./handler8523";
const app = express()
app.get('/8523', handler8523)
app.listen(3000, () => {})
        