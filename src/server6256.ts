
const express = require('express')
import {handler6256} from "./handler6256";
const app = express()
app.get('/6256', handler6256)
app.listen(3000, () => {})
        