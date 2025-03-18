
const express = require('express')
import {handler6111} from "./handler6111";
const app = express()
app.get('/6111', handler6111)
app.listen(3000, () => {})
        