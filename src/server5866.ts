
const express = require('express')
import {handler5866} from "./handler5866";
const app = express()
app.get('/5866', handler5866)
app.listen(3000, () => {})
        