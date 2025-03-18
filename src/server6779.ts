
const express = require('express')
import {handler6779} from "./handler6779";
const app = express()
app.get('/6779', handler6779)
app.listen(3000, () => {})
        