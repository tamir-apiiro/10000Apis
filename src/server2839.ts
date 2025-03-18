
const express = require('express')
import {handler2839} from "./handler2839";
const app = express()
app.get('/2839', handler2839)
app.listen(3000, () => {})
        