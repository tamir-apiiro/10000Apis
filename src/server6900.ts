
const express = require('express')
import {handler6900} from "./handler6900";
const app = express()
app.get('/6900', handler6900)
app.listen(3000, () => {})
        