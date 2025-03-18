
const express = require('express')
import {handler1375} from "./handler1375";
const app = express()
app.get('/1375', handler1375)
app.listen(3000, () => {})
        