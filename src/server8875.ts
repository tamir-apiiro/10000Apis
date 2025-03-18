
const express = require('express')
import {handler8875} from "./handler8875";
const app = express()
app.get('/8875', handler8875)
app.listen(3000, () => {})
        