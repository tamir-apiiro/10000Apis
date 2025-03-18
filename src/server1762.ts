
const express = require('express')
import {handler1762} from "./handler1762";
const app = express()
app.get('/1762', handler1762)
app.listen(3000, () => {})
        