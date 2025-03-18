
const express = require('express')
import {handler1627} from "./handler1627";
const app = express()
app.get('/1627', handler1627)
app.listen(3000, () => {})
        