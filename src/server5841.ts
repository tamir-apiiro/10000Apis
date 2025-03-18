
const express = require('express')
import {handler5841} from "./handler5841";
const app = express()
app.get('/5841', handler5841)
app.listen(3000, () => {})
        