
const express = require('express')
import {handler1154} from "./handler1154";
const app = express()
app.get('/1154', handler1154)
app.listen(3000, () => {})
        