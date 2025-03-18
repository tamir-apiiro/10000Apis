
const express = require('express')
import {handler3377} from "./handler3377";
const app = express()
app.get('/3377', handler3377)
app.listen(3000, () => {})
        