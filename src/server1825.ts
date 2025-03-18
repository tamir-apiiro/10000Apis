
const express = require('express')
import {handler1825} from "./handler1825";
const app = express()
app.get('/1825', handler1825)
app.listen(3000, () => {})
        