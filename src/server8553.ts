
const express = require('express')
import {handler8553} from "./handler8553";
const app = express()
app.get('/8553', handler8553)
app.listen(3000, () => {})
        