
const express = require('express')
import {handler2943} from "./handler2943";
const app = express()
app.get('/2943', handler2943)
app.listen(3000, () => {})
        