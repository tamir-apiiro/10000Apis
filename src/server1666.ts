
const express = require('express')
import {handler1666} from "./handler1666";
const app = express()
app.get('/1666', handler1666)
app.listen(3000, () => {})
        