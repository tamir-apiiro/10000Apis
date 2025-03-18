
const express = require('express')
import {handler8318} from "./handler8318";
const app = express()
app.get('/8318', handler8318)
app.listen(3000, () => {})
        