
const express = require('express')
import {handler5987} from "./handler5987";
const app = express()
app.get('/5987', handler5987)
app.listen(3000, () => {})
        