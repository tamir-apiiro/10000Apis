
const express = require('express')
import {handler6004} from "./handler6004";
const app = express()
app.get('/6004', handler6004)
app.listen(3000, () => {})
        