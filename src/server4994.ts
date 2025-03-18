
const express = require('express')
import {handler4994} from "./handler4994";
const app = express()
app.get('/4994', handler4994)
app.listen(3000, () => {})
        