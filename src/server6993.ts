
const express = require('express')
import {handler6993} from "./handler6993";
const app = express()
app.get('/6993', handler6993)
app.listen(3000, () => {})
        