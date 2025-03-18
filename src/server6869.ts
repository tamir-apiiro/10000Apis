
const express = require('express')
import {handler6869} from "./handler6869";
const app = express()
app.get('/6869', handler6869)
app.listen(3000, () => {})
        