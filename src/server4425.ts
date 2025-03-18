
const express = require('express')
import {handler4425} from "./handler4425";
const app = express()
app.get('/4425', handler4425)
app.listen(3000, () => {})
        