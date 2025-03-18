
const express = require('express')
import {handler3454} from "./handler3454";
const app = express()
app.get('/3454', handler3454)
app.listen(3000, () => {})
        