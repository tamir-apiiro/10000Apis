
const express = require('express')
import {handler6126} from "./handler6126";
const app = express()
app.get('/6126', handler6126)
app.listen(3000, () => {})
        