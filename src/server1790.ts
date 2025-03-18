
const express = require('express')
import {handler1790} from "./handler1790";
const app = express()
app.get('/1790', handler1790)
app.listen(3000, () => {})
        