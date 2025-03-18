
const express = require('express')
import {handler6087} from "./handler6087";
const app = express()
app.get('/6087', handler6087)
app.listen(3000, () => {})
        