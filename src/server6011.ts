
const express = require('express')
import {handler6011} from "./handler6011";
const app = express()
app.get('/6011', handler6011)
app.listen(3000, () => {})
        