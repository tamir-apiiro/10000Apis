
const express = require('express')
import {handler6104} from "./handler6104";
const app = express()
app.get('/6104', handler6104)
app.listen(3000, () => {})
        