
const express = require('express')
import {handler1696} from "./handler1696";
const app = express()
app.get('/1696', handler1696)
app.listen(3000, () => {})
        