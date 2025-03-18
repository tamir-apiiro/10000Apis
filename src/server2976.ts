
const express = require('express')
import {handler2976} from "./handler2976";
const app = express()
app.get('/2976', handler2976)
app.listen(3000, () => {})
        