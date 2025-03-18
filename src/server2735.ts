
const express = require('express')
import {handler2735} from "./handler2735";
const app = express()
app.get('/2735', handler2735)
app.listen(3000, () => {})
        