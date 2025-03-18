
const express = require('express')
import {handler6788} from "./handler6788";
const app = express()
app.get('/6788', handler6788)
app.listen(3000, () => {})
        