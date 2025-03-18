
const express = require('express')
import {handler1124} from "./handler1124";
const app = express()
app.get('/1124', handler1124)
app.listen(3000, () => {})
        