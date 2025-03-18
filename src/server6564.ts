
const express = require('express')
import {handler6564} from "./handler6564";
const app = express()
app.get('/6564', handler6564)
app.listen(3000, () => {})
        