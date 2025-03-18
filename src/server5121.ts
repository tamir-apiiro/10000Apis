
const express = require('express')
import {handler5121} from "./handler5121";
const app = express()
app.get('/5121', handler5121)
app.listen(3000, () => {})
        