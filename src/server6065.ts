
const express = require('express')
import {handler6065} from "./handler6065";
const app = express()
app.get('/6065', handler6065)
app.listen(3000, () => {})
        