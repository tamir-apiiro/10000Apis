
const express = require('express')
import {handler5257} from "./handler5257";
const app = express()
app.get('/5257', handler5257)
app.listen(3000, () => {})
        