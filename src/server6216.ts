
const express = require('express')
import {handler6216} from "./handler6216";
const app = express()
app.get('/6216', handler6216)
app.listen(3000, () => {})
        