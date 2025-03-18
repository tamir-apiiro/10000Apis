
const express = require('express')
import {handler8587} from "./handler8587";
const app = express()
app.get('/8587', handler8587)
app.listen(3000, () => {})
        