
const express = require('express')
import {handler2495} from "./handler2495";
const app = express()
app.get('/2495', handler2495)
app.listen(3000, () => {})
        