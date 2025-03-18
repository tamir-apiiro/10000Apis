
const express = require('express')
import {handler6725} from "./handler6725";
const app = express()
app.get('/6725', handler6725)
app.listen(3000, () => {})
        