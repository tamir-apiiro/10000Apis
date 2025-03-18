
const express = require('express')
import {handler3836} from "./handler3836";
const app = express()
app.get('/3836', handler3836)
app.listen(3000, () => {})
        