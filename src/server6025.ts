
const express = require('express')
import {handler6025} from "./handler6025";
const app = express()
app.get('/6025', handler6025)
app.listen(3000, () => {})
        