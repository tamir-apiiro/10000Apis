
const express = require('express')
import {handler8817} from "./handler8817";
const app = express()
app.get('/8817', handler8817)
app.listen(3000, () => {})
        