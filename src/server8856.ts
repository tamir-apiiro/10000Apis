
const express = require('express')
import {handler8856} from "./handler8856";
const app = express()
app.get('/8856', handler8856)
app.listen(3000, () => {})
        