
const express = require('express')
import {handler1735} from "./handler1735";
const app = express()
app.get('/1735', handler1735)
app.listen(3000, () => {})
        