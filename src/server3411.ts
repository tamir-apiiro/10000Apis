
const express = require('express')
import {handler3411} from "./handler3411";
const app = express()
app.get('/3411', handler3411)
app.listen(3000, () => {})
        