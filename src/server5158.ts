
const express = require('express')
import {handler5158} from "./handler5158";
const app = express()
app.get('/5158', handler5158)
app.listen(3000, () => {})
        