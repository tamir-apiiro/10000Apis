
const express = require('express')
import {handler5536} from "./handler5536";
const app = express()
app.get('/5536', handler5536)
app.listen(3000, () => {})
        