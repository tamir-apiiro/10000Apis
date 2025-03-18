
const express = require('express')
import {handler6547} from "./handler6547";
const app = express()
app.get('/6547', handler6547)
app.listen(3000, () => {})
        