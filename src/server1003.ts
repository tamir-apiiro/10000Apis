
const express = require('express')
import {handler1003} from "./handler1003";
const app = express()
app.get('/1003', handler1003)
app.listen(3000, () => {})
        