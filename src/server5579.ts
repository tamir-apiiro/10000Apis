
const express = require('express')
import {handler5579} from "./handler5579";
const app = express()
app.get('/5579', handler5579)
app.listen(3000, () => {})
        