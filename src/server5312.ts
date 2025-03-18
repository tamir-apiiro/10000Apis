
const express = require('express')
import {handler5312} from "./handler5312";
const app = express()
app.get('/5312', handler5312)
app.listen(3000, () => {})
        