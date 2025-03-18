
const express = require('express')
import {handler3322} from "./handler3322";
const app = express()
app.get('/3322', handler3322)
app.listen(3000, () => {})
        