
const express = require('express')
import {handler1024} from "./handler1024";
const app = express()
app.get('/1024', handler1024)
app.listen(3000, () => {})
        