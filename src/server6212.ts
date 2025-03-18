
const express = require('express')
import {handler6212} from "./handler6212";
const app = express()
app.get('/6212', handler6212)
app.listen(3000, () => {})
        