
const express = require('express')
import {handler5403} from "./handler5403";
const app = express()
app.get('/5403', handler5403)
app.listen(3000, () => {})
        