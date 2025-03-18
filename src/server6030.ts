
const express = require('express')
import {handler6030} from "./handler6030";
const app = express()
app.get('/6030', handler6030)
app.listen(3000, () => {})
        