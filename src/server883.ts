
const express = require('express')
import {handler883} from "./handler883";
const app = express()
app.get('/883', handler883)
app.listen(3000, () => {})
        