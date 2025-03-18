
const express = require('express')
import {handler6592} from "./handler6592";
const app = express()
app.get('/6592', handler6592)
app.listen(3000, () => {})
        