
const express = require('express')
import {handler8591} from "./handler8591";
const app = express()
app.get('/8591', handler8591)
app.listen(3000, () => {})
        