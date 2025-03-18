
const express = require('express')
import {handler6446} from "./handler6446";
const app = express()
app.get('/6446', handler6446)
app.listen(3000, () => {})
        