
const express = require('express')
import {handler2551} from "./handler2551";
const app = express()
app.get('/2551', handler2551)
app.listen(3000, () => {})
        