
const express = require('express')
import {handler3253} from "./handler3253";
const app = express()
app.get('/3253', handler3253)
app.listen(3000, () => {})
        