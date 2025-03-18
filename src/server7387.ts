
const express = require('express')
import {handler7387} from "./handler7387";
const app = express()
app.get('/7387', handler7387)
app.listen(3000, () => {})
        