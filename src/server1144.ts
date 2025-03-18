
const express = require('express')
import {handler1144} from "./handler1144";
const app = express()
app.get('/1144', handler1144)
app.listen(3000, () => {})
        