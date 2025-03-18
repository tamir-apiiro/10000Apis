
const express = require('express')
import {handler8358} from "./handler8358";
const app = express()
app.get('/8358', handler8358)
app.listen(3000, () => {})
        