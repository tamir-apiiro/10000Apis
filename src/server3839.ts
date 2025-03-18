
const express = require('express')
import {handler3839} from "./handler3839";
const app = express()
app.get('/3839', handler3839)
app.listen(3000, () => {})
        