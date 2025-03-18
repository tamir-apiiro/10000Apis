
const express = require('express')
import {handler3400} from "./handler3400";
const app = express()
app.get('/3400', handler3400)
app.listen(3000, () => {})
        