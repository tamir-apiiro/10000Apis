
const express = require('express')
import {handler5589} from "./handler5589";
const app = express()
app.get('/5589', handler5589)
app.listen(3000, () => {})
        