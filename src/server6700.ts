
const express = require('express')
import {handler6700} from "./handler6700";
const app = express()
app.get('/6700', handler6700)
app.listen(3000, () => {})
        