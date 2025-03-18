
const express = require('express')
import {handler6506} from "./handler6506";
const app = express()
app.get('/6506', handler6506)
app.listen(3000, () => {})
        