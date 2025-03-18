
const express = require('express')
import {handler3976} from "./handler3976";
const app = express()
app.get('/3976', handler3976)
app.listen(3000, () => {})
        