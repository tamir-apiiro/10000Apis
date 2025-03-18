
const express = require('express')
import {handler1073} from "./handler1073";
const app = express()
app.get('/1073', handler1073)
app.listen(3000, () => {})
        