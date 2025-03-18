
const express = require('express')
import {handler6080} from "./handler6080";
const app = express()
app.get('/6080', handler6080)
app.listen(3000, () => {})
        