
const express = require('express')
import {handler3242} from "./handler3242";
const app = express()
app.get('/3242', handler3242)
app.listen(3000, () => {})
        