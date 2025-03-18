
const express = require('express')
import {handler5269} from "./handler5269";
const app = express()
app.get('/5269', handler5269)
app.listen(3000, () => {})
        