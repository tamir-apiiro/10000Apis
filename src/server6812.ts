
const express = require('express')
import {handler6812} from "./handler6812";
const app = express()
app.get('/6812', handler6812)
app.listen(3000, () => {})
        