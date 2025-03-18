
const express = require('express')
import {handler6346} from "./handler6346";
const app = express()
app.get('/6346', handler6346)
app.listen(3000, () => {})
        