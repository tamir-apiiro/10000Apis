
const express = require('express')
import {handler6384} from "./handler6384";
const app = express()
app.get('/6384', handler6384)
app.listen(3000, () => {})
        