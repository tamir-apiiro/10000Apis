
const express = require('express')
import {handler8950} from "./handler8950";
const app = express()
app.get('/8950', handler8950)
app.listen(3000, () => {})
        