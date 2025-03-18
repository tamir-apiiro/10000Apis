
const express = require('express')
import {handler1278} from "./handler1278";
const app = express()
app.get('/1278', handler1278)
app.listen(3000, () => {})
        