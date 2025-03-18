
const express = require('express')
import {handler5020} from "./handler5020";
const app = express()
app.get('/5020', handler5020)
app.listen(3000, () => {})
        