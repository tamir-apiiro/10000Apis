
const express = require('express')
import {handler3779} from "./handler3779";
const app = express()
app.get('/3779', handler3779)
app.listen(3000, () => {})
        