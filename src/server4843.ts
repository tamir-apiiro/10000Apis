
const express = require('express')
import {handler4843} from "./handler4843";
const app = express()
app.get('/4843', handler4843)
app.listen(3000, () => {})
        