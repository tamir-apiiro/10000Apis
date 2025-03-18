
const express = require('express')
import {handler5215} from "./handler5215";
const app = express()
app.get('/5215', handler5215)
app.listen(3000, () => {})
        