
const express = require('express')
import {handler5372} from "./handler5372";
const app = express()
app.get('/5372', handler5372)
app.listen(3000, () => {})
        