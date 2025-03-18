
const express = require('express')
import {handler2494} from "./handler2494";
const app = express()
app.get('/2494', handler2494)
app.listen(3000, () => {})
        