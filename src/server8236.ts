
const express = require('express')
import {handler8236} from "./handler8236";
const app = express()
app.get('/8236', handler8236)
app.listen(3000, () => {})
        