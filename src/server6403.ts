
const express = require('express')
import {handler6403} from "./handler6403";
const app = express()
app.get('/6403', handler6403)
app.listen(3000, () => {})
        