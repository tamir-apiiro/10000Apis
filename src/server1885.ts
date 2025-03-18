
const express = require('express')
import {handler1885} from "./handler1885";
const app = express()
app.get('/1885', handler1885)
app.listen(3000, () => {})
        