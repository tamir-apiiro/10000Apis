
const express = require('express')
import {handler7253} from "./handler7253";
const app = express()
app.get('/7253', handler7253)
app.listen(3000, () => {})
        