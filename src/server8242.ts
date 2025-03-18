
const express = require('express')
import {handler8242} from "./handler8242";
const app = express()
app.get('/8242', handler8242)
app.listen(3000, () => {})
        