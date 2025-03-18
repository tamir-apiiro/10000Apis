
const express = require('express')
import {handler6516} from "./handler6516";
const app = express()
app.get('/6516', handler6516)
app.listen(3000, () => {})
        