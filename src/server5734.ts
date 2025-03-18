
const express = require('express')
import {handler5734} from "./handler5734";
const app = express()
app.get('/5734', handler5734)
app.listen(3000, () => {})
        