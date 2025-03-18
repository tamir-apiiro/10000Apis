
const express = require('express')
import {handler8830} from "./handler8830";
const app = express()
app.get('/8830', handler8830)
app.listen(3000, () => {})
        