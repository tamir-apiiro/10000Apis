
const express = require('express')
import {handler6356} from "./handler6356";
const app = express()
app.get('/6356', handler6356)
app.listen(3000, () => {})
        