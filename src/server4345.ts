
const express = require('express')
import {handler4345} from "./handler4345";
const app = express()
app.get('/4345', handler4345)
app.listen(3000, () => {})
        