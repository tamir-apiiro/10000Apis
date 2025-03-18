
const express = require('express')
import {handler6183} from "./handler6183";
const app = express()
app.get('/6183', handler6183)
app.listen(3000, () => {})
        