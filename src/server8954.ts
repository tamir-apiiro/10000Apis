
const express = require('express')
import {handler8954} from "./handler8954";
const app = express()
app.get('/8954', handler8954)
app.listen(3000, () => {})
        