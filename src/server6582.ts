
const express = require('express')
import {handler6582} from "./handler6582";
const app = express()
app.get('/6582', handler6582)
app.listen(3000, () => {})
        