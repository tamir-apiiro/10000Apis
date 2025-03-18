
const express = require('express')
import {handler6023} from "./handler6023";
const app = express()
app.get('/6023', handler6023)
app.listen(3000, () => {})
        