
const express = require('express')
import {handler1271} from "./handler1271";
const app = express()
app.get('/1271', handler1271)
app.listen(3000, () => {})
        