
const express = require('express')
import {handler4838} from "./handler4838";
const app = express()
app.get('/4838', handler4838)
app.listen(3000, () => {})
        