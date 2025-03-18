
const express = require('express')
import {handler4084} from "./handler4084";
const app = express()
app.get('/4084', handler4084)
app.listen(3000, () => {})
        