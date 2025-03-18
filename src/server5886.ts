
const express = require('express')
import {handler5886} from "./handler5886";
const app = express()
app.get('/5886', handler5886)
app.listen(3000, () => {})
        