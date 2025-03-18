
const express = require('express')
import {handler6502} from "./handler6502";
const app = express()
app.get('/6502', handler6502)
app.listen(3000, () => {})
        