
const express = require('express')
import {handler1319} from "./handler1319";
const app = express()
app.get('/1319', handler1319)
app.listen(3000, () => {})
        