
const express = require('express')
import {handler8255} from "./handler8255";
const app = express()
app.get('/8255', handler8255)
app.listen(3000, () => {})
        