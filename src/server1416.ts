
const express = require('express')
import {handler1416} from "./handler1416";
const app = express()
app.get('/1416', handler1416)
app.listen(3000, () => {})
        