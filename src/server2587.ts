
const express = require('express')
import {handler2587} from "./handler2587";
const app = express()
app.get('/2587', handler2587)
app.listen(3000, () => {})
        