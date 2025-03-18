
const express = require('express')
import {handler5830} from "./handler5830";
const app = express()
app.get('/5830', handler5830)
app.listen(3000, () => {})
        