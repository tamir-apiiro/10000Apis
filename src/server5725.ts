
const express = require('express')
import {handler5725} from "./handler5725";
const app = express()
app.get('/5725', handler5725)
app.listen(3000, () => {})
        