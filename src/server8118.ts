
const express = require('express')
import {handler8118} from "./handler8118";
const app = express()
app.get('/8118', handler8118)
app.listen(3000, () => {})
        