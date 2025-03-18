
const express = require('express')
import {handler3189} from "./handler3189";
const app = express()
app.get('/3189', handler3189)
app.listen(3000, () => {})
        