
const express = require('express')
import {handler4717} from "./handler4717";
const app = express()
app.get('/4717', handler4717)
app.listen(3000, () => {})
        