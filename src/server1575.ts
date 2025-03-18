
const express = require('express')
import {handler1575} from "./handler1575";
const app = express()
app.get('/1575', handler1575)
app.listen(3000, () => {})
        