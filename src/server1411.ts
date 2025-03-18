
const express = require('express')
import {handler1411} from "./handler1411";
const app = express()
app.get('/1411', handler1411)
app.listen(3000, () => {})
        