
const express = require('express')
import {handler8495} from "./handler8495";
const app = express()
app.get('/8495', handler8495)
app.listen(3000, () => {})
        