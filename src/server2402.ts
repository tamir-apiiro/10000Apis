
const express = require('express')
import {handler2402} from "./handler2402";
const app = express()
app.get('/2402', handler2402)
app.listen(3000, () => {})
        