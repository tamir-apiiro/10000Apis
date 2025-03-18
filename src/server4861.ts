
const express = require('express')
import {handler4861} from "./handler4861";
const app = express()
app.get('/4861', handler4861)
app.listen(3000, () => {})
        