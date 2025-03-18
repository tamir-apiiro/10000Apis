
const express = require('express')
import {handler1707} from "./handler1707";
const app = express()
app.get('/1707', handler1707)
app.listen(3000, () => {})
        