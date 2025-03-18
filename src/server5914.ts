
const express = require('express')
import {handler5914} from "./handler5914";
const app = express()
app.get('/5914', handler5914)
app.listen(3000, () => {})
        