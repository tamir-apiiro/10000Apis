
const express = require('express')
import {handler5634} from "./handler5634";
const app = express()
app.get('/5634', handler5634)
app.listen(3000, () => {})
        