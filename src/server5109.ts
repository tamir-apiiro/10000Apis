
const express = require('express')
import {handler5109} from "./handler5109";
const app = express()
app.get('/5109', handler5109)
app.listen(3000, () => {})
        