
const express = require('express')
import {handler1830} from "./handler1830";
const app = express()
app.get('/1830', handler1830)
app.listen(3000, () => {})
        