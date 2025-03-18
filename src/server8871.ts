
const express = require('express')
import {handler8871} from "./handler8871";
const app = express()
app.get('/8871', handler8871)
app.listen(3000, () => {})
        