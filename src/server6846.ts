
const express = require('express')
import {handler6846} from "./handler6846";
const app = express()
app.get('/6846', handler6846)
app.listen(3000, () => {})
        