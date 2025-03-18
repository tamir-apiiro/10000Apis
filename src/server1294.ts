
const express = require('express')
import {handler1294} from "./handler1294";
const app = express()
app.get('/1294', handler1294)
app.listen(3000, () => {})
        