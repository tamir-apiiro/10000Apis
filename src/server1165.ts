
const express = require('express')
import {handler1165} from "./handler1165";
const app = express()
app.get('/1165', handler1165)
app.listen(3000, () => {})
        