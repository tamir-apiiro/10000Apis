
const express = require('express')
import {handler2114} from "./handler2114";
const app = express()
app.get('/2114', handler2114)
app.listen(3000, () => {})
        