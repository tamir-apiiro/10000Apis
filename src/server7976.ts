
const express = require('express')
import {handler7976} from "./handler7976";
const app = express()
app.get('/7976', handler7976)
app.listen(3000, () => {})
        