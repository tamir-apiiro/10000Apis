
const express = require('express')
import {handler6060} from "./handler6060";
const app = express()
app.get('/6060', handler6060)
app.listen(3000, () => {})
        