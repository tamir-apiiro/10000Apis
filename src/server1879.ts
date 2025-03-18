
const express = require('express')
import {handler1879} from "./handler1879";
const app = express()
app.get('/1879', handler1879)
app.listen(3000, () => {})
        