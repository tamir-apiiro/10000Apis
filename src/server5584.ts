
const express = require('express')
import {handler5584} from "./handler5584";
const app = express()
app.get('/5584', handler5584)
app.listen(3000, () => {})
        