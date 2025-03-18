
const express = require('express')
import {handler5321} from "./handler5321";
const app = express()
app.get('/5321', handler5321)
app.listen(3000, () => {})
        