
const express = require('express')
import {handler3250} from "./handler3250";
const app = express()
app.get('/3250', handler3250)
app.listen(3000, () => {})
        