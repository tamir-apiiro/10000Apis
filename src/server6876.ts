
const express = require('express')
import {handler6876} from "./handler6876";
const app = express()
app.get('/6876', handler6876)
app.listen(3000, () => {})
        