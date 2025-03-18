
const express = require('express')
import {handler4882} from "./handler4882";
const app = express()
app.get('/4882', handler4882)
app.listen(3000, () => {})
        