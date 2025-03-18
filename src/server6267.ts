
const express = require('express')
import {handler6267} from "./handler6267";
const app = express()
app.get('/6267', handler6267)
app.listen(3000, () => {})
        