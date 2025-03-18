
const express = require('express')
import {handler3125} from "./handler3125";
const app = express()
app.get('/3125', handler3125)
app.listen(3000, () => {})
        