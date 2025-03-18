
const express = require('express')
import {handler5685} from "./handler5685";
const app = express()
app.get('/5685', handler5685)
app.listen(3000, () => {})
        