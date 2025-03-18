
const express = require('express')
import {handler6278} from "./handler6278";
const app = express()
app.get('/6278', handler6278)
app.listen(3000, () => {})
        