
const express = require('express')
import {handler8178} from "./handler8178";
const app = express()
app.get('/8178', handler8178)
app.listen(3000, () => {})
        