
const express = require('express')
import {handler5588} from "./handler5588";
const app = express()
app.get('/5588', handler5588)
app.listen(3000, () => {})
        