
const express = require('express')
import {handler2271} from "./handler2271";
const app = express()
app.get('/2271', handler2271)
app.listen(3000, () => {})
        