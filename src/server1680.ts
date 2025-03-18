
const express = require('express')
import {handler1680} from "./handler1680";
const app = express()
app.get('/1680', handler1680)
app.listen(3000, () => {})
        