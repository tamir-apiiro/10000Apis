
const express = require('express')
import {handler731} from "./handler731";
const app = express()
app.get('/731', handler731)
app.listen(3000, () => {})
        