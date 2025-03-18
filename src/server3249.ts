
const express = require('express')
import {handler3249} from "./handler3249";
const app = express()
app.get('/3249', handler3249)
app.listen(3000, () => {})
        