
const express = require('express')
import {handler7857} from "./handler7857";
const app = express()
app.get('/7857', handler7857)
app.listen(3000, () => {})
        