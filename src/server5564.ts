
const express = require('express')
import {handler5564} from "./handler5564";
const app = express()
app.get('/5564', handler5564)
app.listen(3000, () => {})
        