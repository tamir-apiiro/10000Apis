
const express = require('express')
import {handler6271} from "./handler6271";
const app = express()
app.get('/6271', handler6271)
app.listen(3000, () => {})
        