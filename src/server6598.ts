
const express = require('express')
import {handler6598} from "./handler6598";
const app = express()
app.get('/6598', handler6598)
app.listen(3000, () => {})
        