
const express = require('express')
import {handler6707} from "./handler6707";
const app = express()
app.get('/6707', handler6707)
app.listen(3000, () => {})
        