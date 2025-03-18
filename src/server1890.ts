
const express = require('express')
import {handler1890} from "./handler1890";
const app = express()
app.get('/1890', handler1890)
app.listen(3000, () => {})
        