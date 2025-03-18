
const express = require('express')
import {handler8745} from "./handler8745";
const app = express()
app.get('/8745', handler8745)
app.listen(3000, () => {})
        