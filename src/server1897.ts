
const express = require('express')
import {handler1897} from "./handler1897";
const app = express()
app.get('/1897', handler1897)
app.listen(3000, () => {})
        