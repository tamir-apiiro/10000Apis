
const express = require('express')
import {handler5331} from "./handler5331";
const app = express()
app.get('/5331', handler5331)
app.listen(3000, () => {})
        