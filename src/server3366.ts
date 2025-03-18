
const express = require('express')
import {handler3366} from "./handler3366";
const app = express()
app.get('/3366', handler3366)
app.listen(3000, () => {})
        