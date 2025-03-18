
const express = require('express')
import {handler3123} from "./handler3123";
const app = express()
app.get('/3123', handler3123)
app.listen(3000, () => {})
        