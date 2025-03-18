
const express = require('express')
import {handler3251} from "./handler3251";
const app = express()
app.get('/3251', handler3251)
app.listen(3000, () => {})
        