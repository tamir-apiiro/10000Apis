
const express = require('express')
import {handler587} from "./handler587";
const app = express()
app.get('/587', handler587)
app.listen(3000, () => {})
        