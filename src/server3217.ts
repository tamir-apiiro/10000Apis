
const express = require('express')
import {handler3217} from "./handler3217";
const app = express()
app.get('/3217', handler3217)
app.listen(3000, () => {})
        