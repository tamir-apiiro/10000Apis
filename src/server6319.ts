
const express = require('express')
import {handler6319} from "./handler6319";
const app = express()
app.get('/6319', handler6319)
app.listen(3000, () => {})
        