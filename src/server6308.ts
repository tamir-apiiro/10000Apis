
const express = require('express')
import {handler6308} from "./handler6308";
const app = express()
app.get('/6308', handler6308)
app.listen(3000, () => {})
        