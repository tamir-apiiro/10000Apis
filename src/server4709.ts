
const express = require('express')
import {handler4709} from "./handler4709";
const app = express()
app.get('/4709', handler4709)
app.listen(3000, () => {})
        