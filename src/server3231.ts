
const express = require('express')
import {handler3231} from "./handler3231";
const app = express()
app.get('/3231', handler3231)
app.listen(3000, () => {})
        