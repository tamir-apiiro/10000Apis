
const express = require('express')
import {handler6558} from "./handler6558";
const app = express()
app.get('/6558', handler6558)
app.listen(3000, () => {})
        