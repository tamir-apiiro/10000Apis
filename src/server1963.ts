
const express = require('express')
import {handler1963} from "./handler1963";
const app = express()
app.get('/1963', handler1963)
app.listen(3000, () => {})
        