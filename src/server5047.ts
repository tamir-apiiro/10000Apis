
const express = require('express')
import {handler5047} from "./handler5047";
const app = express()
app.get('/5047', handler5047)
app.listen(3000, () => {})
        