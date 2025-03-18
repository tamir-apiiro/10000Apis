
const express = require('express')
import {handler8462} from "./handler8462";
const app = express()
app.get('/8462', handler8462)
app.listen(3000, () => {})
        