
const express = require('express')
import {handler1566} from "./handler1566";
const app = express()
app.get('/1566', handler1566)
app.listen(3000, () => {})
        