
const express = require('express')
import {handler3558} from "./handler3558";
const app = express()
app.get('/3558', handler3558)
app.listen(3000, () => {})
        