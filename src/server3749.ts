
const express = require('express')
import {handler3749} from "./handler3749";
const app = express()
app.get('/3749', handler3749)
app.listen(3000, () => {})
        