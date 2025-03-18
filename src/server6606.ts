
const express = require('express')
import {handler6606} from "./handler6606";
const app = express()
app.get('/6606', handler6606)
app.listen(3000, () => {})
        