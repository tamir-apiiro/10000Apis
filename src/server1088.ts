
const express = require('express')
import {handler1088} from "./handler1088";
const app = express()
app.get('/1088', handler1088)
app.listen(3000, () => {})
        