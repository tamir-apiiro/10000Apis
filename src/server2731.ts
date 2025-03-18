
const express = require('express')
import {handler2731} from "./handler2731";
const app = express()
app.get('/2731', handler2731)
app.listen(3000, () => {})
        