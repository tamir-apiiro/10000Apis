
const express = require('express')
import {handler2189} from "./handler2189";
const app = express()
app.get('/2189', handler2189)
app.listen(3000, () => {})
        