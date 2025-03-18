
const express = require('express')
import {handler6326} from "./handler6326";
const app = express()
app.get('/6326', handler6326)
app.listen(3000, () => {})
        