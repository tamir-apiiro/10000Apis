
const express = require('express')
import {handler6248} from "./handler6248";
const app = express()
app.get('/6248', handler6248)
app.listen(3000, () => {})
        