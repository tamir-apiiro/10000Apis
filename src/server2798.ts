
const express = require('express')
import {handler2798} from "./handler2798";
const app = express()
app.get('/2798', handler2798)
app.listen(3000, () => {})
        