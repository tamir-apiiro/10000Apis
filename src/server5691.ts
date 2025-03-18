
const express = require('express')
import {handler5691} from "./handler5691";
const app = express()
app.get('/5691', handler5691)
app.listen(3000, () => {})
        