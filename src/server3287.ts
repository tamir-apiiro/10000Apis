
const express = require('express')
import {handler3287} from "./handler3287";
const app = express()
app.get('/3287', handler3287)
app.listen(3000, () => {})
        