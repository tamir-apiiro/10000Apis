
const express = require('express')
import {handler6203} from "./handler6203";
const app = express()
app.get('/6203', handler6203)
app.listen(3000, () => {})
        