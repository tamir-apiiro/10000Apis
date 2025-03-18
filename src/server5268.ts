
const express = require('express')
import {handler5268} from "./handler5268";
const app = express()
app.get('/5268', handler5268)
app.listen(3000, () => {})
        