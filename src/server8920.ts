
const express = require('express')
import {handler8920} from "./handler8920";
const app = express()
app.get('/8920', handler8920)
app.listen(3000, () => {})
        