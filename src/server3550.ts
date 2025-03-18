
const express = require('express')
import {handler3550} from "./handler3550";
const app = express()
app.get('/3550', handler3550)
app.listen(3000, () => {})
        