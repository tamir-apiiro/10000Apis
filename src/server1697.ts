
const express = require('express')
import {handler1697} from "./handler1697";
const app = express()
app.get('/1697', handler1697)
app.listen(3000, () => {})
        