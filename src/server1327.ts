
const express = require('express')
import {handler1327} from "./handler1327";
const app = express()
app.get('/1327', handler1327)
app.listen(3000, () => {})
        