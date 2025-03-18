
const express = require('express')
import {handler6473} from "./handler6473";
const app = express()
app.get('/6473', handler6473)
app.listen(3000, () => {})
        