
const express = require('express')
import {handler8800} from "./handler8800";
const app = express()
app.get('/8800', handler8800)
app.listen(3000, () => {})
        