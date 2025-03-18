
const express = require('express')
import {handler2454} from "./handler2454";
const app = express()
app.get('/2454', handler2454)
app.listen(3000, () => {})
        