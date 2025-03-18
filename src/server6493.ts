
const express = require('express')
import {handler6493} from "./handler6493";
const app = express()
app.get('/6493', handler6493)
app.listen(3000, () => {})
        