
const express = require('express')
import {handler3835} from "./handler3835";
const app = express()
app.get('/3835', handler3835)
app.listen(3000, () => {})
        