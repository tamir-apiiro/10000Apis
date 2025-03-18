
const express = require('express')
import {handler6000} from "./handler6000";
const app = express()
app.get('/6000', handler6000)
app.listen(3000, () => {})
        