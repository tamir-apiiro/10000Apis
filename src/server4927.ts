
const express = require('express')
import {handler4927} from "./handler4927";
const app = express()
app.get('/4927', handler4927)
app.listen(3000, () => {})
        