
const express = require('express')
import {handler3587} from "./handler3587";
const app = express()
app.get('/3587', handler3587)
app.listen(3000, () => {})
        