
const express = require('express')
import {handler1185} from "./handler1185";
const app = express()
app.get('/1185', handler1185)
app.listen(3000, () => {})
        