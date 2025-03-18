
const express = require('express')
import {handler1731} from "./handler1731";
const app = express()
app.get('/1731', handler1731)
app.listen(3000, () => {})
        