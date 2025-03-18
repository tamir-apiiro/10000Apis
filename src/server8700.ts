
const express = require('express')
import {handler8700} from "./handler8700";
const app = express()
app.get('/8700', handler8700)
app.listen(3000, () => {})
        