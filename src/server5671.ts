
const express = require('express')
import {handler5671} from "./handler5671";
const app = express()
app.get('/5671', handler5671)
app.listen(3000, () => {})
        