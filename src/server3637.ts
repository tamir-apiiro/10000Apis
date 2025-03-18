
const express = require('express')
import {handler3637} from "./handler3637";
const app = express()
app.get('/3637', handler3637)
app.listen(3000, () => {})
        