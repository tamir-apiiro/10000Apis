
const express = require('express')
import {handler2556} from "./handler2556";
const app = express()
app.get('/2556', handler2556)
app.listen(3000, () => {})
        