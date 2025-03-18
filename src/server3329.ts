
const express = require('express')
import {handler3329} from "./handler3329";
const app = express()
app.get('/3329', handler3329)
app.listen(3000, () => {})
        