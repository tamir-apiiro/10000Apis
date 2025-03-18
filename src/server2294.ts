
const express = require('express')
import {handler2294} from "./handler2294";
const app = express()
app.get('/2294', handler2294)
app.listen(3000, () => {})
        