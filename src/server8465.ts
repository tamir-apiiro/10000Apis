
const express = require('express')
import {handler8465} from "./handler8465";
const app = express()
app.get('/8465', handler8465)
app.listen(3000, () => {})
        