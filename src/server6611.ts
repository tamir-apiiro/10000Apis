
const express = require('express')
import {handler6611} from "./handler6611";
const app = express()
app.get('/6611', handler6611)
app.listen(3000, () => {})
        