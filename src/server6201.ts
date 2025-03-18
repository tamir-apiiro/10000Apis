
const express = require('express')
import {handler6201} from "./handler6201";
const app = express()
app.get('/6201', handler6201)
app.listen(3000, () => {})
        