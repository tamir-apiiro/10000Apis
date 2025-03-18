
const express = require('express')
import {handler6852} from "./handler6852";
const app = express()
app.get('/6852', handler6852)
app.listen(3000, () => {})
        