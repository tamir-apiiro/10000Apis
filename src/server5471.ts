
const express = require('express')
import {handler5471} from "./handler5471";
const app = express()
app.get('/5471', handler5471)
app.listen(3000, () => {})
        