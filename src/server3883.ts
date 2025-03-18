
const express = require('express')
import {handler3883} from "./handler3883";
const app = express()
app.get('/3883', handler3883)
app.listen(3000, () => {})
        