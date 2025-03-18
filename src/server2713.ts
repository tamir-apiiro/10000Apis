
const express = require('express')
import {handler2713} from "./handler2713";
const app = express()
app.get('/2713', handler2713)
app.listen(3000, () => {})
        