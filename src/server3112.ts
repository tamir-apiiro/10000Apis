
const express = require('express')
import {handler3112} from "./handler3112";
const app = express()
app.get('/3112', handler3112)
app.listen(3000, () => {})
        