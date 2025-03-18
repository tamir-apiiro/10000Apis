
const express = require('express')
import {handler8976} from "./handler8976";
const app = express()
app.get('/8976', handler8976)
app.listen(3000, () => {})
        