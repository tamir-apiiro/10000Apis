
const express = require('express')
import {handler2124} from "./handler2124";
const app = express()
app.get('/2124', handler2124)
app.listen(3000, () => {})
        