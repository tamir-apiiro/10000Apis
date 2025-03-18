
const express = require('express')
import {handler1754} from "./handler1754";
const app = express()
app.get('/1754', handler1754)
app.listen(3000, () => {})
        