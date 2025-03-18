
const express = require('express')
import {handler189} from "./handler189";
const app = express()
app.get('/189', handler189)
app.listen(3000, () => {})
        