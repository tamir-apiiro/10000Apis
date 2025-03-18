
const express = require('express')
import {handler8302} from "./handler8302";
const app = express()
app.get('/8302', handler8302)
app.listen(3000, () => {})
        