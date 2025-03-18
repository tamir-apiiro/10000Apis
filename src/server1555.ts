
const express = require('express')
import {handler1555} from "./handler1555";
const app = express()
app.get('/1555', handler1555)
app.listen(3000, () => {})
        