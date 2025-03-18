
const express = require('express')
import {handler3495} from "./handler3495";
const app = express()
app.get('/3495', handler3495)
app.listen(3000, () => {})
        