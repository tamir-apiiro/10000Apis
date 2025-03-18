
const express = require('express')
import {handler6125} from "./handler6125";
const app = express()
app.get('/6125', handler6125)
app.listen(3000, () => {})
        