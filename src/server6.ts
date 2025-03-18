
const express = require('express')
import {handler6} from "./handler6";
const app = express()
app.get('/6', handler6)
app.listen(3000, () => {})
        