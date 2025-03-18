
const express = require('express')
import {handler5180} from "./handler5180";
const app = express()
app.get('/5180', handler5180)
app.listen(3000, () => {})
        