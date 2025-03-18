
const express = require('express')
import {handler6198} from "./handler6198";
const app = express()
app.get('/6198', handler6198)
app.listen(3000, () => {})
        