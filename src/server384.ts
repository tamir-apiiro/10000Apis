
const express = require('express')
import {handler384} from "./handler384";
const app = express()
app.get('/384', handler384)
app.listen(3000, () => {})
        