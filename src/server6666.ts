
const express = require('express')
import {handler6666} from "./handler6666";
const app = express()
app.get('/6666', handler6666)
app.listen(3000, () => {})
        