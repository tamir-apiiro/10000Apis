
const express = require('express')
import {handler3408} from "./handler3408";
const app = express()
app.get('/3408', handler3408)
app.listen(3000, () => {})
        