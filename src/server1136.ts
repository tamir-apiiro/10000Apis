
const express = require('express')
import {handler1136} from "./handler1136";
const app = express()
app.get('/1136', handler1136)
app.listen(3000, () => {})
        