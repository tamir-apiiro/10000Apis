
const express = require('express')
import {handler5029} from "./handler5029";
const app = express()
app.get('/5029', handler5029)
app.listen(3000, () => {})
        