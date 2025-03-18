
const express = require('express')
import {handler5923} from "./handler5923";
const app = express()
app.get('/5923', handler5923)
app.listen(3000, () => {})
        