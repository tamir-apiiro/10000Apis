
const express = require('express')
import {handler6250} from "./handler6250";
const app = express()
app.get('/6250', handler6250)
app.listen(3000, () => {})
        