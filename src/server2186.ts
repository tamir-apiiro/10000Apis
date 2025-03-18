
const express = require('express')
import {handler2186} from "./handler2186";
const app = express()
app.get('/2186', handler2186)
app.listen(3000, () => {})
        