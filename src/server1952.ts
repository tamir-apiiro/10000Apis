
const express = require('express')
import {handler1952} from "./handler1952";
const app = express()
app.get('/1952', handler1952)
app.listen(3000, () => {})
        