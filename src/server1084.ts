
const express = require('express')
import {handler1084} from "./handler1084";
const app = express()
app.get('/1084', handler1084)
app.listen(3000, () => {})
        