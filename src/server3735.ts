
const express = require('express')
import {handler3735} from "./handler3735";
const app = express()
app.get('/3735', handler3735)
app.listen(3000, () => {})
        