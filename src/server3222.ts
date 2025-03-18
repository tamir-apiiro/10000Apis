
const express = require('express')
import {handler3222} from "./handler3222";
const app = express()
app.get('/3222', handler3222)
app.listen(3000, () => {})
        