
const express = require('express')
import {handler6951} from "./handler6951";
const app = express()
app.get('/6951', handler6951)
app.listen(3000, () => {})
        