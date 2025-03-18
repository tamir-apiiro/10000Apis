
const express = require('express')
import {handler6041} from "./handler6041";
const app = express()
app.get('/6041', handler6041)
app.listen(3000, () => {})
        