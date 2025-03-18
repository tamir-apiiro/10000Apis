
const express = require('express')
import {handler3375} from "./handler3375";
const app = express()
app.get('/3375', handler3375)
app.listen(3000, () => {})
        