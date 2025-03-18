
const express = require('express')
import {handler3330} from "./handler3330";
const app = express()
app.get('/3330', handler3330)
app.listen(3000, () => {})
        