
const express = require('express')
import {handler1393} from "./handler1393";
const app = express()
app.get('/1393', handler1393)
app.listen(3000, () => {})
        