
const express = require('express')
import {handler6008} from "./handler6008";
const app = express()
app.get('/6008', handler6008)
app.listen(3000, () => {})
        