
const express = require('express')
import {handler146} from "./handler146";
const app = express()
app.get('/146', handler146)
app.listen(3000, () => {})
        