
const express = require('express')
import {handler5518} from "./handler5518";
const app = express()
app.get('/5518', handler5518)
app.listen(3000, () => {})
        