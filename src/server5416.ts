
const express = require('express')
import {handler5416} from "./handler5416";
const app = express()
app.get('/5416', handler5416)
app.listen(3000, () => {})
        