
const express = require('express')
import {handler4561} from "./handler4561";
const app = express()
app.get('/4561', handler4561)
app.listen(3000, () => {})
        