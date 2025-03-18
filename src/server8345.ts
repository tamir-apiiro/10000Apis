
const express = require('express')
import {handler8345} from "./handler8345";
const app = express()
app.get('/8345', handler8345)
app.listen(3000, () => {})
        