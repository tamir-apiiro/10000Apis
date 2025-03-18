
const express = require('express')
import {handler5141} from "./handler5141";
const app = express()
app.get('/5141', handler5141)
app.listen(3000, () => {})
        