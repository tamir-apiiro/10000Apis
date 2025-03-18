
const express = require('express')
import {handler5780} from "./handler5780";
const app = express()
app.get('/5780', handler5780)
app.listen(3000, () => {})
        