
const express = require('express')
import {handler6146} from "./handler6146";
const app = express()
app.get('/6146', handler6146)
app.listen(3000, () => {})
        