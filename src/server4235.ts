
const express = require('express')
import {handler4235} from "./handler4235";
const app = express()
app.get('/4235', handler4235)
app.listen(3000, () => {})
        