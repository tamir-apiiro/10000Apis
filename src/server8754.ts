
const express = require('express')
import {handler8754} from "./handler8754";
const app = express()
app.get('/8754', handler8754)
app.listen(3000, () => {})
        