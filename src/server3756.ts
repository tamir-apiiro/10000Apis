
const express = require('express')
import {handler3756} from "./handler3756";
const app = express()
app.get('/3756', handler3756)
app.listen(3000, () => {})
        