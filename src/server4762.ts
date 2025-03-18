
const express = require('express')
import {handler4762} from "./handler4762";
const app = express()
app.get('/4762', handler4762)
app.listen(3000, () => {})
        