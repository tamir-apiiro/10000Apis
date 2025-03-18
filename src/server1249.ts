
const express = require('express')
import {handler1249} from "./handler1249";
const app = express()
app.get('/1249', handler1249)
app.listen(3000, () => {})
        