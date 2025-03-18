
const express = require('express')
import {handler5736} from "./handler5736";
const app = express()
app.get('/5736', handler5736)
app.listen(3000, () => {})
        