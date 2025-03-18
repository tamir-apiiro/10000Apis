
const express = require('express')
import {handler6925} from "./handler6925";
const app = express()
app.get('/6925', handler6925)
app.listen(3000, () => {})
        