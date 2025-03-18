
const express = require('express')
import {handler575} from "./handler575";
const app = express()
app.get('/575', handler575)
app.listen(3000, () => {})
        