
const express = require('express')
import {handler6824} from "./handler6824";
const app = express()
app.get('/6824', handler6824)
app.listen(3000, () => {})
        