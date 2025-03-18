
const express = require('express')
import {handler2309} from "./handler2309";
const app = express()
app.get('/2309', handler2309)
app.listen(3000, () => {})
        