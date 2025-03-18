
const express = require('express')
import {handler3501} from "./handler3501";
const app = express()
app.get('/3501', handler3501)
app.listen(3000, () => {})
        