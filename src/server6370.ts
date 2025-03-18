
const express = require('express')
import {handler6370} from "./handler6370";
const app = express()
app.get('/6370', handler6370)
app.listen(3000, () => {})
        