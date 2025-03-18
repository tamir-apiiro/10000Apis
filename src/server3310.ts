
const express = require('express')
import {handler3310} from "./handler3310";
const app = express()
app.get('/3310', handler3310)
app.listen(3000, () => {})
        