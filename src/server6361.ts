
const express = require('express')
import {handler6361} from "./handler6361";
const app = express()
app.get('/6361', handler6361)
app.listen(3000, () => {})
        