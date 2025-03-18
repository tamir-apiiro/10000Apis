
const express = require('express')
import {handler5012} from "./handler5012";
const app = express()
app.get('/5012', handler5012)
app.listen(3000, () => {})
        