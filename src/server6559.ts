
const express = require('express')
import {handler6559} from "./handler6559";
const app = express()
app.get('/6559', handler6559)
app.listen(3000, () => {})
        