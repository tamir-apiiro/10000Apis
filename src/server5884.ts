
const express = require('express')
import {handler5884} from "./handler5884";
const app = express()
app.get('/5884', handler5884)
app.listen(3000, () => {})
        