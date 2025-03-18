
const express = require('express')
import {handler2129} from "./handler2129";
const app = express()
app.get('/2129', handler2129)
app.listen(3000, () => {})
        