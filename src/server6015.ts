
const express = require('express')
import {handler6015} from "./handler6015";
const app = express()
app.get('/6015', handler6015)
app.listen(3000, () => {})
        