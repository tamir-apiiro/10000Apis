
const express = require('express')
import {handler9976} from "./handler9976";
const app = express()
app.get('/9976', handler9976)
app.listen(3000, () => {})
        