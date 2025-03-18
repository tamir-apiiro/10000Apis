
const express = require('express')
import {handler3354} from "./handler3354";
const app = express()
app.get('/3354', handler3354)
app.listen(3000, () => {})
        