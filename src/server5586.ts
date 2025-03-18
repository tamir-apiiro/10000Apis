
const express = require('express')
import {handler5586} from "./handler5586";
const app = express()
app.get('/5586', handler5586)
app.listen(3000, () => {})
        