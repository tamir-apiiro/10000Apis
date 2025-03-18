
const express = require('express')
import {handler6891} from "./handler6891";
const app = express()
app.get('/6891', handler6891)
app.listen(3000, () => {})
        