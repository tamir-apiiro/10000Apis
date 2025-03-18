
const express = require('express')
import {handler7345} from "./handler7345";
const app = express()
app.get('/7345', handler7345)
app.listen(3000, () => {})
        