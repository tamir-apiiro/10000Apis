
const express = require('express')
import {handler8663} from "./handler8663";
const app = express()
app.get('/8663', handler8663)
app.listen(3000, () => {})
        