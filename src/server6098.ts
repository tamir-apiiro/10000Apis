
const express = require('express')
import {handler6098} from "./handler6098";
const app = express()
app.get('/6098', handler6098)
app.listen(3000, () => {})
        