
const express = require('express')
import {handler1551} from "./handler1551";
const app = express()
app.get('/1551', handler1551)
app.listen(3000, () => {})
        