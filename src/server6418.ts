
const express = require('express')
import {handler6418} from "./handler6418";
const app = express()
app.get('/6418', handler6418)
app.listen(3000, () => {})
        