
const express = require('express')
import {handler5803} from "./handler5803";
const app = express()
app.get('/5803', handler5803)
app.listen(3000, () => {})
        