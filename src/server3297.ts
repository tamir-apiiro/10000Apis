
const express = require('express')
import {handler3297} from "./handler3297";
const app = express()
app.get('/3297', handler3297)
app.listen(3000, () => {})
        