
const express = require('express')
import {handler6697} from "./handler6697";
const app = express()
app.get('/6697', handler6697)
app.listen(3000, () => {})
        