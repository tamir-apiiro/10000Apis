
const express = require('express')
import {handler6068} from "./handler6068";
const app = express()
app.get('/6068', handler6068)
app.listen(3000, () => {})
        