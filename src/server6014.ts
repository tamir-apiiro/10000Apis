
const express = require('express')
import {handler6014} from "./handler6014";
const app = express()
app.get('/6014', handler6014)
app.listen(3000, () => {})
        