
const express = require('express')
import {handler1726} from "./handler1726";
const app = express()
app.get('/1726', handler1726)
app.listen(3000, () => {})
        