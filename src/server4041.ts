
const express = require('express')
import {handler4041} from "./handler4041";
const app = express()
app.get('/4041', handler4041)
app.listen(3000, () => {})
        