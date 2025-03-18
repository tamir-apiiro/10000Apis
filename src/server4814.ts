
const express = require('express')
import {handler4814} from "./handler4814";
const app = express()
app.get('/4814', handler4814)
app.listen(3000, () => {})
        