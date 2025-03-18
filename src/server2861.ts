
const express = require('express')
import {handler2861} from "./handler2861";
const app = express()
app.get('/2861', handler2861)
app.listen(3000, () => {})
        