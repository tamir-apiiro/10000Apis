
const express = require('express')
import {handler1175} from "./handler1175";
const app = express()
app.get('/1175', handler1175)
app.listen(3000, () => {})
        