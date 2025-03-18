
const express = require('express')
import {handler3050} from "./handler3050";
const app = express()
app.get('/3050', handler3050)
app.listen(3000, () => {})
        