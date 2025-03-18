
const express = require('express')
import {handler8124} from "./handler8124";
const app = express()
app.get('/8124', handler8124)
app.listen(3000, () => {})
        