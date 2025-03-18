
const express = require('express')
import {handler6285} from "./handler6285";
const app = express()
app.get('/6285', handler6285)
app.listen(3000, () => {})
        