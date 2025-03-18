
const express = require('express')
import {handler5187} from "./handler5187";
const app = express()
app.get('/5187', handler5187)
app.listen(3000, () => {})
        