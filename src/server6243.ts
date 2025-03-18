
const express = require('express')
import {handler6243} from "./handler6243";
const app = express()
app.get('/6243', handler6243)
app.listen(3000, () => {})
        