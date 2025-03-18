
const express = require('express')
import {handler5915} from "./handler5915";
const app = express()
app.get('/5915', handler5915)
app.listen(3000, () => {})
        