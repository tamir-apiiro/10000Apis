
const express = require('express')
import {handler6942} from "./handler6942";
const app = express()
app.get('/6942', handler6942)
app.listen(3000, () => {})
        