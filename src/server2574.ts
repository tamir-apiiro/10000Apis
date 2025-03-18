
const express = require('express')
import {handler2574} from "./handler2574";
const app = express()
app.get('/2574', handler2574)
app.listen(3000, () => {})
        