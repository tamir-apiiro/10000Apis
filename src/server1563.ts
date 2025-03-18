
const express = require('express')
import {handler1563} from "./handler1563";
const app = express()
app.get('/1563', handler1563)
app.listen(3000, () => {})
        