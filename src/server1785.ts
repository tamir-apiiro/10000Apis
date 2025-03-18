
const express = require('express')
import {handler1785} from "./handler1785";
const app = express()
app.get('/1785', handler1785)
app.listen(3000, () => {})
        