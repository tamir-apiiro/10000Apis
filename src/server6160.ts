
const express = require('express')
import {handler6160} from "./handler6160";
const app = express()
app.get('/6160', handler6160)
app.listen(3000, () => {})
        