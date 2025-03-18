
const express = require('express')
import {handler6586} from "./handler6586";
const app = express()
app.get('/6586', handler6586)
app.listen(3000, () => {})
        