
const express = require('express')
import {handler7587} from "./handler7587";
const app = express()
app.get('/7587', handler7587)
app.listen(3000, () => {})
        