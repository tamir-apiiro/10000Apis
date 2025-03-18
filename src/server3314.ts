
const express = require('express')
import {handler3314} from "./handler3314";
const app = express()
app.get('/3314', handler3314)
app.listen(3000, () => {})
        