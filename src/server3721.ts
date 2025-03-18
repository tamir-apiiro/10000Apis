
const express = require('express')
import {handler3721} from "./handler3721";
const app = express()
app.get('/3721', handler3721)
app.listen(3000, () => {})
        