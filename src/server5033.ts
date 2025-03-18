
const express = require('express')
import {handler5033} from "./handler5033";
const app = express()
app.get('/5033', handler5033)
app.listen(3000, () => {})
        