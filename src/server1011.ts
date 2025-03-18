
const express = require('express')
import {handler1011} from "./handler1011";
const app = express()
app.get('/1011', handler1011)
app.listen(3000, () => {})
        