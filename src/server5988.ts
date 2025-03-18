
const express = require('express')
import {handler5988} from "./handler5988";
const app = express()
app.get('/5988', handler5988)
app.listen(3000, () => {})
        