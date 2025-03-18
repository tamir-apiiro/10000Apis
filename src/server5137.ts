
const express = require('express')
import {handler5137} from "./handler5137";
const app = express()
app.get('/5137', handler5137)
app.listen(3000, () => {})
        