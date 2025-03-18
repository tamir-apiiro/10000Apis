
const express = require('express')
import {handler4796} from "./handler4796";
const app = express()
app.get('/4796', handler4796)
app.listen(3000, () => {})
        