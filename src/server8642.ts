
const express = require('express')
import {handler8642} from "./handler8642";
const app = express()
app.get('/8642', handler8642)
app.listen(3000, () => {})
        