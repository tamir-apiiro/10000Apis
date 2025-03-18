
const express = require('express')
import {handler5559} from "./handler5559";
const app = express()
app.get('/5559', handler5559)
app.listen(3000, () => {})
        