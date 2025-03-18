
const express = require('express')
import {handler3151} from "./handler3151";
const app = express()
app.get('/3151', handler3151)
app.listen(3000, () => {})
        