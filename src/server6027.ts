
const express = require('express')
import {handler6027} from "./handler6027";
const app = express()
app.get('/6027', handler6027)
app.listen(3000, () => {})
        