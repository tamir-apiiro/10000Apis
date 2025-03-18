
const express = require('express')
import {handler4215} from "./handler4215";
const app = express()
app.get('/4215', handler4215)
app.listen(3000, () => {})
        