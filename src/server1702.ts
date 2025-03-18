
const express = require('express')
import {handler1702} from "./handler1702";
const app = express()
app.get('/1702', handler1702)
app.listen(3000, () => {})
        