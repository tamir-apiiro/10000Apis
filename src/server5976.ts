
const express = require('express')
import {handler5976} from "./handler5976";
const app = express()
app.get('/5976', handler5976)
app.listen(3000, () => {})
        