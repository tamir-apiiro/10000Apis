
const express = require('express')
import {handler6713} from "./handler6713";
const app = express()
app.get('/6713', handler6713)
app.listen(3000, () => {})
        