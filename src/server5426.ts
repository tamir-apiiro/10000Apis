
const express = require('express')
import {handler5426} from "./handler5426";
const app = express()
app.get('/5426', handler5426)
app.listen(3000, () => {})
        