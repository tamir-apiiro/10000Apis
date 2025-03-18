
const express = require('express')
import {handler5628} from "./handler5628";
const app = express()
app.get('/5628', handler5628)
app.listen(3000, () => {})
        