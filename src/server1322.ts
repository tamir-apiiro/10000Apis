
const express = require('express')
import {handler1322} from "./handler1322";
const app = express()
app.get('/1322', handler1322)
app.listen(3000, () => {})
        