
const express = require('express')
import {handler5595} from "./handler5595";
const app = express()
app.get('/5595', handler5595)
app.listen(3000, () => {})
        