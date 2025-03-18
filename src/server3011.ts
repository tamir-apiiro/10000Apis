
const express = require('express')
import {handler3011} from "./handler3011";
const app = express()
app.get('/3011', handler3011)
app.listen(3000, () => {})
        