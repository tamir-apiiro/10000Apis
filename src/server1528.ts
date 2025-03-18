
const express = require('express')
import {handler1528} from "./handler1528";
const app = express()
app.get('/1528', handler1528)
app.listen(3000, () => {})
        