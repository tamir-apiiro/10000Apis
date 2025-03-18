
const express = require('express')
import {handler6612} from "./handler6612";
const app = express()
app.get('/6612', handler6612)
app.listen(3000, () => {})
        