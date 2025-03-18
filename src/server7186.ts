
const express = require('express')
import {handler7186} from "./handler7186";
const app = express()
app.get('/7186', handler7186)
app.listen(3000, () => {})
        