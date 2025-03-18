
const express = require('express')
import {handler1305} from "./handler1305";
const app = express()
app.get('/1305', handler1305)
app.listen(3000, () => {})
        