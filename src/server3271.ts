
const express = require('express')
import {handler3271} from "./handler3271";
const app = express()
app.get('/3271', handler3271)
app.listen(3000, () => {})
        