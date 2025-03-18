
const express = require('express')
import {handler4810} from "./handler4810";
const app = express()
app.get('/4810', handler4810)
app.listen(3000, () => {})
        