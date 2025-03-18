
const express = require('express')
import {handler6609} from "./handler6609";
const app = express()
app.get('/6609', handler6609)
app.listen(3000, () => {})
        