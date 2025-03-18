
const express = require('express')
import {handler5101} from "./handler5101";
const app = express()
app.get('/5101', handler5101)
app.listen(3000, () => {})
        