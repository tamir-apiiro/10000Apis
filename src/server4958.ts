
const express = require('express')
import {handler4958} from "./handler4958";
const app = express()
app.get('/4958', handler4958)
app.listen(3000, () => {})
        