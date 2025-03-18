
const express = require('express')
import {handler5840} from "./handler5840";
const app = express()
app.get('/5840', handler5840)
app.listen(3000, () => {})
        