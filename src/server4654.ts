
const express = require('express')
import {handler4654} from "./handler4654";
const app = express()
app.get('/4654', handler4654)
app.listen(3000, () => {})
        