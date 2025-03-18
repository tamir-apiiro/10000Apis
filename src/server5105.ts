
const express = require('express')
import {handler5105} from "./handler5105";
const app = express()
app.get('/5105', handler5105)
app.listen(3000, () => {})
        