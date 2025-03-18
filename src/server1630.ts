
const express = require('express')
import {handler1630} from "./handler1630";
const app = express()
app.get('/1630', handler1630)
app.listen(3000, () => {})
        