
const express = require('express')
import {handler4918} from "./handler4918";
const app = express()
app.get('/4918', handler4918)
app.listen(3000, () => {})
        