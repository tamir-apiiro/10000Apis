
const express = require('express')
import {handler6596} from "./handler6596";
const app = express()
app.get('/6596', handler6596)
app.listen(3000, () => {})
        