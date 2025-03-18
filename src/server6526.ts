
const express = require('express')
import {handler6526} from "./handler6526";
const app = express()
app.get('/6526', handler6526)
app.listen(3000, () => {})
        