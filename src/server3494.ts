
const express = require('express')
import {handler3494} from "./handler3494";
const app = express()
app.get('/3494', handler3494)
app.listen(3000, () => {})
        