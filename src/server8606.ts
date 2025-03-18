
const express = require('express')
import {handler8606} from "./handler8606";
const app = express()
app.get('/8606', handler8606)
app.listen(3000, () => {})
        