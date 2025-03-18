
const express = require('express')
import {handler8431} from "./handler8431";
const app = express()
app.get('/8431', handler8431)
app.listen(3000, () => {})
        