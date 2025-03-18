
const express = require('express')
import {handler8212} from "./handler8212";
const app = express()
app.get('/8212', handler8212)
app.listen(3000, () => {})
        