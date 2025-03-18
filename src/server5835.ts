
const express = require('express')
import {handler5835} from "./handler5835";
const app = express()
app.get('/5835', handler5835)
app.listen(3000, () => {})
        