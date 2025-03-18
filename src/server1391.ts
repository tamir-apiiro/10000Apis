
const express = require('express')
import {handler1391} from "./handler1391";
const app = express()
app.get('/1391', handler1391)
app.listen(3000, () => {})
        