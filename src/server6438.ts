
const express = require('express')
import {handler6438} from "./handler6438";
const app = express()
app.get('/6438', handler6438)
app.listen(3000, () => {})
        