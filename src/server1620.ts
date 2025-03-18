
const express = require('express')
import {handler1620} from "./handler1620";
const app = express()
app.get('/1620', handler1620)
app.listen(3000, () => {})
        