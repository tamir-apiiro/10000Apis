
const express = require('express')
import {handler5455} from "./handler5455";
const app = express()
app.get('/5455', handler5455)
app.listen(3000, () => {})
        