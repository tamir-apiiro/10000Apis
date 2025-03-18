
const express = require('express')
import {handler2345} from "./handler2345";
const app = express()
app.get('/2345', handler2345)
app.listen(3000, () => {})
        