
const express = require('express')
import {handler5163} from "./handler5163";
const app = express()
app.get('/5163', handler5163)
app.listen(3000, () => {})
        