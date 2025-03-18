
const express = require('express')
import {handler4440} from "./handler4440";
const app = express()
app.get('/4440', handler4440)
app.listen(3000, () => {})
        