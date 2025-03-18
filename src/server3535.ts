
const express = require('express')
import {handler3535} from "./handler3535";
const app = express()
app.get('/3535', handler3535)
app.listen(3000, () => {})
        