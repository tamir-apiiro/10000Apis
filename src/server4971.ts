
const express = require('express')
import {handler4971} from "./handler4971";
const app = express()
app.get('/4971', handler4971)
app.listen(3000, () => {})
        