
const express = require('express')
import {handler6883} from "./handler6883";
const app = express()
app.get('/6883', handler6883)
app.listen(3000, () => {})
        