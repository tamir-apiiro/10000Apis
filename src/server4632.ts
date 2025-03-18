
const express = require('express')
import {handler4632} from "./handler4632";
const app = express()
app.get('/4632', handler4632)
app.listen(3000, () => {})
        