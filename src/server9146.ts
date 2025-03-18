
const express = require('express')
import {handler9146} from "./handler9146";
const app = express()
app.get('/9146', handler9146)
app.listen(3000, () => {})
        