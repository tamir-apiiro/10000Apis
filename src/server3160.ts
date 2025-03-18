
const express = require('express')
import {handler3160} from "./handler3160";
const app = express()
app.get('/3160', handler3160)
app.listen(3000, () => {})
        