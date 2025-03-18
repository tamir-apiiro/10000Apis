
const express = require('express')
import {handler5775} from "./handler5775";
const app = express()
app.get('/5775', handler5775)
app.listen(3000, () => {})
        