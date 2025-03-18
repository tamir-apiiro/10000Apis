
const express = require('express')
import {handler6425} from "./handler6425";
const app = express()
app.get('/6425', handler6425)
app.listen(3000, () => {})
        