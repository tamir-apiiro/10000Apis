
const express = require('express')
import {handler4381} from "./handler4381";
const app = express()
app.get('/4381', handler4381)
app.listen(3000, () => {})
        