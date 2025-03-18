
const express = require('express')
import {handler5438} from "./handler5438";
const app = express()
app.get('/5438', handler5438)
app.listen(3000, () => {})
        