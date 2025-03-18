
const express = require('express')
import {handler4155} from "./handler4155";
const app = express()
app.get('/4155', handler4155)
app.listen(3000, () => {})
        