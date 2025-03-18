
const express = require('express')
import {handler6310} from "./handler6310";
const app = express()
app.get('/6310', handler6310)
app.listen(3000, () => {})
        