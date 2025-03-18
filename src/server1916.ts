
const express = require('express')
import {handler1916} from "./handler1916";
const app = express()
app.get('/1916', handler1916)
app.listen(3000, () => {})
        