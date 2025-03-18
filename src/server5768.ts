
const express = require('express')
import {handler5768} from "./handler5768";
const app = express()
app.get('/5768', handler5768)
app.listen(3000, () => {})
        