
const express = require('express')
import {handler7538} from "./handler7538";
const app = express()
app.get('/7538', handler7538)
app.listen(3000, () => {})
        