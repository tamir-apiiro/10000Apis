
const express = require('express')
import {handler8620} from "./handler8620";
const app = express()
app.get('/8620', handler8620)
app.listen(3000, () => {})
        