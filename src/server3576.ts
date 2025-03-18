
const express = require('express')
import {handler3576} from "./handler3576";
const app = express()
app.get('/3576', handler3576)
app.listen(3000, () => {})
        