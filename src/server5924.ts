
const express = require('express')
import {handler5924} from "./handler5924";
const app = express()
app.get('/5924', handler5924)
app.listen(3000, () => {})
        