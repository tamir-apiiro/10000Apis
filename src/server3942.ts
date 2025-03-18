
const express = require('express')
import {handler3942} from "./handler3942";
const app = express()
app.get('/3942', handler3942)
app.listen(3000, () => {})
        