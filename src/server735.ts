
const express = require('express')
import {handler735} from "./handler735";
const app = express()
app.get('/735', handler735)
app.listen(3000, () => {})
        