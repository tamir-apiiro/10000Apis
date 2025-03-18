
const express = require('express')
import {handler6171} from "./handler6171";
const app = express()
app.get('/6171', handler6171)
app.listen(3000, () => {})
        