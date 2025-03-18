
const express = require('express')
import {handler5730} from "./handler5730";
const app = express()
app.get('/5730', handler5730)
app.listen(3000, () => {})
        