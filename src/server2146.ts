
const express = require('express')
import {handler2146} from "./handler2146";
const app = express()
app.get('/2146', handler2146)
app.listen(3000, () => {})
        