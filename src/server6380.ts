
const express = require('express')
import {handler6380} from "./handler6380";
const app = express()
app.get('/6380', handler6380)
app.listen(3000, () => {})
        