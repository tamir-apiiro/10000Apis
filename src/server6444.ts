
const express = require('express')
import {handler6444} from "./handler6444";
const app = express()
app.get('/6444', handler6444)
app.listen(3000, () => {})
        