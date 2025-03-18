
const express = require('express')
import {handler5293} from "./handler5293";
const app = express()
app.get('/5293', handler5293)
app.listen(3000, () => {})
        