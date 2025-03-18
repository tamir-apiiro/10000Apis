
const express = require('express')
import {handler6561} from "./handler6561";
const app = express()
app.get('/6561', handler6561)
app.listen(3000, () => {})
        