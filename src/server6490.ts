
const express = require('express')
import {handler6490} from "./handler6490";
const app = express()
app.get('/6490', handler6490)
app.listen(3000, () => {})
        