
const express = require('express')
import {handler1116} from "./handler1116";
const app = express()
app.get('/1116', handler1116)
app.listen(3000, () => {})
        