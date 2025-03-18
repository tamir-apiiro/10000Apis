
const express = require('express')
import {handler8120} from "./handler8120";
const app = express()
app.get('/8120', handler8120)
app.listen(3000, () => {})
        