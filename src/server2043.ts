
const express = require('express')
import {handler2043} from "./handler2043";
const app = express()
app.get('/2043', handler2043)
app.listen(3000, () => {})
        