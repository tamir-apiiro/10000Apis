
const express = require('express')
import {handler5043} from "./handler5043";
const app = express()
app.get('/5043', handler5043)
app.listen(3000, () => {})
        