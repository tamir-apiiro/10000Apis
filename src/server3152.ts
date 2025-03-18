
const express = require('express')
import {handler3152} from "./handler3152";
const app = express()
app.get('/3152', handler3152)
app.listen(3000, () => {})
        