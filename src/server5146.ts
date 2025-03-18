
const express = require('express')
import {handler5146} from "./handler5146";
const app = express()
app.get('/5146', handler5146)
app.listen(3000, () => {})
        