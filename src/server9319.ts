
const express = require('express')
import {handler9319} from "./handler9319";
const app = express()
app.get('/9319', handler9319)
app.listen(3000, () => {})
        