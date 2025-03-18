
const express = require('express')
import {handler5890} from "./handler5890";
const app = express()
app.get('/5890', handler5890)
app.listen(3000, () => {})
        