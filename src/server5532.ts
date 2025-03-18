
const express = require('express')
import {handler5532} from "./handler5532";
const app = express()
app.get('/5532', handler5532)
app.listen(3000, () => {})
        