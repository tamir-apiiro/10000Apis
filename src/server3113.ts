
const express = require('express')
import {handler3113} from "./handler3113";
const app = express()
app.get('/3113', handler3113)
app.listen(3000, () => {})
        