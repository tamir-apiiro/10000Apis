
const express = require('express')
import {handler5723} from "./handler5723";
const app = express()
app.get('/5723', handler5723)
app.listen(3000, () => {})
        