
const express = require('express')
import {handler7558} from "./handler7558";
const app = express()
app.get('/7558', handler7558)
app.listen(3000, () => {})
        