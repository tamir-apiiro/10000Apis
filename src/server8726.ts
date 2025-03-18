
const express = require('express')
import {handler8726} from "./handler8726";
const app = express()
app.get('/8726', handler8726)
app.listen(3000, () => {})
        