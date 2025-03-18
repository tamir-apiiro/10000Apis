
const express = require('express')
import {handler976} from "./handler976";
const app = express()
app.get('/976', handler976)
app.listen(3000, () => {})
        