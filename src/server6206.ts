
const express = require('express')
import {handler6206} from "./handler6206";
const app = express()
app.get('/6206', handler6206)
app.listen(3000, () => {})
        