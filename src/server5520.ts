
const express = require('express')
import {handler5520} from "./handler5520";
const app = express()
app.get('/5520', handler5520)
app.listen(3000, () => {})
        