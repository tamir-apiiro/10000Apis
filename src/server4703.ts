
const express = require('express')
import {handler4703} from "./handler4703";
const app = express()
app.get('/4703', handler4703)
app.listen(3000, () => {})
        