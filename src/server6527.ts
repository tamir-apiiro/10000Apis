
const express = require('express')
import {handler6527} from "./handler6527";
const app = express()
app.get('/6527', handler6527)
app.listen(3000, () => {})
        