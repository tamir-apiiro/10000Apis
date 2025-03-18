
const express = require('express')
import {handler6072} from "./handler6072";
const app = express()
app.get('/6072', handler6072)
app.listen(3000, () => {})
        