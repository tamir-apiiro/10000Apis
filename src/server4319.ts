
const express = require('express')
import {handler4319} from "./handler4319";
const app = express()
app.get('/4319', handler4319)
app.listen(3000, () => {})
        