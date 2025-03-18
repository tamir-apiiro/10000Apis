
const express = require('express')
import {handler7146} from "./handler7146";
const app = express()
app.get('/7146', handler7146)
app.listen(3000, () => {})
        