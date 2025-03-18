
const express = require('express')
import {handler6427} from "./handler6427";
const app = express()
app.get('/6427', handler6427)
app.listen(3000, () => {})
        