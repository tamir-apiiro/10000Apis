
const express = require('express')
import {handler4379} from "./handler4379";
const app = express()
app.get('/4379', handler4379)
app.listen(3000, () => {})
        