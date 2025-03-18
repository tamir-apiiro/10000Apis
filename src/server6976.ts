
const express = require('express')
import {handler6976} from "./handler6976";
const app = express()
app.get('/6976', handler6976)
app.listen(3000, () => {})
        