
const express = require('express')
import {handler5525} from "./handler5525";
const app = express()
app.get('/5525', handler5525)
app.listen(3000, () => {})
        