
const express = require('express')
import {handler5023} from "./handler5023";
const app = express()
app.get('/5023', handler5023)
app.listen(3000, () => {})
        