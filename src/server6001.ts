
const express = require('express')
import {handler6001} from "./handler6001";
const app = express()
app.get('/6001', handler6001)
app.listen(3000, () => {})
        