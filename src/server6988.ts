
const express = require('express')
import {handler6988} from "./handler6988";
const app = express()
app.get('/6988', handler6988)
app.listen(3000, () => {})
        