
const express = require('express')
import {handler6735} from "./handler6735";
const app = express()
app.get('/6735', handler6735)
app.listen(3000, () => {})
        