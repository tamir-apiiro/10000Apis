
const express = require('express')
import {handler5621} from "./handler5621";
const app = express()
app.get('/5621', handler5621)
app.listen(3000, () => {})
        