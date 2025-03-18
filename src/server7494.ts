
const express = require('express')
import {handler7494} from "./handler7494";
const app = express()
app.get('/7494', handler7494)
app.listen(3000, () => {})
        