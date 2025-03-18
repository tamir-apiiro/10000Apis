
const express = require('express')
import {handler6462} from "./handler6462";
const app = express()
app.get('/6462', handler6462)
app.listen(3000, () => {})
        