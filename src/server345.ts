
const express = require('express')
import {handler345} from "./handler345";
const app = express()
app.get('/345', handler345)
app.listen(3000, () => {})
        