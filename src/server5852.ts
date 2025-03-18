
const express = require('express')
import {handler5852} from "./handler5852";
const app = express()
app.get('/5852', handler5852)
app.listen(3000, () => {})
        