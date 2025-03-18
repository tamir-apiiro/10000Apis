
const express = require('express')
import {handler8260} from "./handler8260";
const app = express()
app.get('/8260', handler8260)
app.listen(3000, () => {})
        