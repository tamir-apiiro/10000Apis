
const express = require('express')
import {handler2459} from "./handler2459";
const app = express()
app.get('/2459', handler2459)
app.listen(3000, () => {})
        